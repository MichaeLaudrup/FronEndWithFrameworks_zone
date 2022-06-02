import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  moodLogin: boolean = true; 
  constructor( private enrutador: Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.enrutador.navigate(['nutriapp'])
  }

}
