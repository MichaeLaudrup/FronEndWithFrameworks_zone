import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaUsuarios : Usuario[] = []; 
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsers()
    .pipe(map( (response:{data:[]}) => response.data ))
    .subscribe( (data) => {
      data.forEach((usuario:any) => {
        const user = new Usuario(usuario['id'], usuario['email'], usuario['first_name'], usuario['last_name'], usuario['avatar'])
        this.listaUsuarios.push(user); 
      })

    })
  }



}
