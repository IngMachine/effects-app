import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario, UsersPage, UsuarioResponse } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<UsersPage>(`${ this.url }/users?per_page=6?delay=2`)
                    .pipe(
                      map( (users: UsersPage) => users.data )
                    );
  }

  getUserById( id: string ): Observable<Usuario> {
    return this.http.get<UsuarioResponse>(`${ this.url }/users/${ id }`)
                    .pipe(
                      map( (users: UsuarioResponse) => users.data )
                    );
  }
}
