import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError} from "rxjs"; 
import { ThrowStmt } from "@angular/compiler";

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
            .pipe( catchError( (errorRes) => {
                console.log(errorRes)
                let errorMessage = 'An unknow error occurred!';
                if(!errorRes.error || !errorRes.error.error) return throwError(errorMessage)
                switch(errorRes.error.error.message){
                    case 'EMAIL_EXISTS': 
                    errorMessage = 'This email exists already'
                    break; 
                    case 'ADMIN_ONLY_OPERATION': 
                    errorMessage = 'Extrange behavior'
                    break; 
                }
                return throwError(errorMessage)
            })); 
    }


    login( email:string, password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARGpIsZePlPUS_6rkdoRt4J78sOZTNyes', {
            email, password, returnSecureToken: true
        }).pipe( catchError( (erroResponse) => {
            return throwError('Proving')
        }))
    }

}