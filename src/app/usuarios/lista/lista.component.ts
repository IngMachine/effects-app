import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];

  constructor(
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsers()
        .subscribe( usuarios => {
          this.usuarios = usuarios;
        })
  }

}
