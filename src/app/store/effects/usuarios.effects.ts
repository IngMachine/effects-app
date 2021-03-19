import { Injectable } from '@angular/core';
import { Actions,  createEffect,  ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions,
        public usuariosService: UsuariosService
    ) { }

    cargarUsuarios$ = createEffect(() => this.actions$.pipe(
            ofType( (usuariosActions.UsuariosTypesAction.CARGAR_USUARIOS).valueOf() ),
            switchMap( () => {
                return this.usuariosService.getUsers()
                           .pipe(
                               map( users => new usuariosActions.CargarUsuariosSuccess( users ) ),
                               catchError( error => of(new usuariosActions.CargarUsuariosFail( error )) )
                           );
            })
        )
    );
}
