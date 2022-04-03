import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import 'firebase/firestore'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( private anFireAuth: AngularFireAuth, public angularFireDB: AngularFirestore) { 
    this.initAuthListener(); 
  }


  crearUsuario(nombre: string, email: string, password:string ){

    return this.anFireAuth.createUserWithEmailAndPassword(email,password).then(({user}) => {
      let usuario = new Usuario(user!.uid, nombre, email);
      return this.angularFireDB.doc(`${user!.uid}/usuario`).set({...usuario});
    }); 
  }

  loguearUsuario(email: string, password: string) {
    return this.anFireAuth.signInWithEmailAndPassword(email,password); 
  }

  logout(){
    return this.anFireAuth.signOut(); 
  }

  initAuthListener(){
    this.anFireAuth.authState.subscribe( (user) => {
    })
  }

  isAuth(){
    return this.anFireAuth.authState.pipe( 
      map( fuser => {
        return fuser != null; 
      }))
  }
}
