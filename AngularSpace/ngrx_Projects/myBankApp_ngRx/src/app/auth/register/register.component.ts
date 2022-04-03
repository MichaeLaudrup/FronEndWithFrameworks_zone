import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  crearUsuario(){
    if(this.registroForm.invalid) return; 
    Swal.fire({
      title: 'Iniciando sesion!',
      didOpen: () => {
        Swal.showLoading()
      }
    })
    const {nombre, email, password} = this.registroForm.value; 
    this.authService.crearUsuario(nombre, email, password).then( data => {
      Swal.close(); 
      this.router.navigate(['/'])
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
