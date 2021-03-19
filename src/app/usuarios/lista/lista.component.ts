import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import * as usuariosActions from '../../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuarios')
              .subscribe( users =>  {
                this.usuarios = users.users;
                this.loading = users.loading;
                this.error = users.error;
              });
    this.store.dispatch( new usuariosActions.CargarUsuarios() );
  }

}
