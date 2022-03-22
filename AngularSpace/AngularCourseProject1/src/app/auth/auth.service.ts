import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError} from "rxjs"; 
import { User } from "./user.model";

export interface AuthResponseData {
    kind:string,
    idToken:string,
    email:string,
    refreshToken: string,
    expiresin:string,
    localID:string,
    registered?: boolean
}

@Injectable( {providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null); 
    token: string= null; 
    constructor( private http: HttpClient){}


    singup(email:string , password: string){
        let data = {
            email,
            password,
            returnSecureToken: true
        }
        console.log(data)
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARGpIsZePlPUS_6rkdoRt4J78sOZTNyes', data)
            .pipe( catchError( this.handleError), tap(
                resData => {
                    this.handleAuthentication(resData.email, resData.localID, resData.idToken,+resData.expiresin)
                }
            )); 
    }

    login( email:string, password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARGpIsZePlPUS_6rkdoRt4J78sOZTNyes', {
            email, password, returnSecureToken: true
        }).pipe( catchError(this.handleError ), tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localID, resData.idToken,+resData.expiresin)
            }
        ))
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknow error occurred!';
        if(!errorRes.error || !errorRes.error.error) return throwError(errorMessage)
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS': 
                errorMessage = 'This email exists already'
            break; 
            case 'ADMIN_ONLY_OPERATION': 
                errorMessage = 'You\'re trying to create an anonymous user, this API dont allow this behavior'
            break; 
            case 'EMAIL_NOT_FOUND': 
                errorMessage = 'This email does not exist.'
            break; 
            case 'INVALID_PASSWORD': 
                errorMessage = 'Incorrect Password! Try again! '
            break; 
        }
        return throwError(errorMessage)
    }

    private handleAuthentication(email:string, id:string, token:string, expiresIn:number){
        const expirationDate = new Date((new Date().getTime()) + expiresIn); 
        const user = new User(email, id, token, expirationDate);
        this.user.next(user); 
    }

}