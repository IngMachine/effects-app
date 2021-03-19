import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario, UsersPage } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<UsersPage>(`${ this.url }/users?per_page=6`)
                    .pipe(
                      map( (users: UsersPage) => users.data )
                    );
  }
}
