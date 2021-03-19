import { Injectable } from '@angular/core';
import { Actions,  createEffect,  ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    constructor(
        private actions$: Actions,
        public usuariosService: UsuariosService
    ) { }

    cargarUsuario$ = createEffect(() => this.actions$.pipe(
            ofType( (usuarioActions.UsuarioTypesAction.CARGAR_USUARIO).valueOf() ),
            switchMap( action => {
                return this.usuariosService.getUserById( action['id'] )
                           .pipe(
                               map( user => new usuarioActions.CargarUsuarioSuccess( user ) ),
                               catchError( error => of(new usuarioActions.CargarUsuarioFail( error )) )
                           );
            })
        )
    );
}
