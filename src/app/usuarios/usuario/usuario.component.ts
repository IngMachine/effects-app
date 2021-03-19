import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as  usuarioActions from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean;
  error: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
                       .subscribe( ( { id } ) => {
                         this.store.dispatch(new usuarioActions.CargarUsuario( id ) );
                       });
    this.store.select('usuario')
              .subscribe( usuario => {
                this.usuario = usuario.user;
                this.loading = usuario.loading;
                this.error = usuario.error;
              });
  }

}
