import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  constructor( private authService: AuthService, private router:Router) {
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup ( {
      email:new FormControl('maikel@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', Validators.required)})
  }

  login(){
    if(this.loginForm.invalid) return; 
    Swal.fire({
      title: 'Iniciando sesion!',
      didOpen: () => {
        Swal.showLoading()
      }
    })
    const {email, password} = this.loginForm.value;
    this.authService.loguearUsuario(email,password).then((responseData) =>{
      Swal.close(); 
      this.router.navigate(['/']); 
    }).catch( error => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    });  
  }

}
