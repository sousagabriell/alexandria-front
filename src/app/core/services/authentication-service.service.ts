import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../interfaces/user';
import { UserLogin} from '../interfaces/usersLogin';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpClient:HttpClient,
    private httpApi: HttpApiService
  ) { 
  }
  postNewUser(body: any) : Observable<any>{
    return this.httpApi.post("/usuarios/cadastrar", body)
  }
  authenticate(username: string, password: string) {
    const userLogin: UserLogin = new UserLogin();
    userLogin.usuario=username
    userLogin.senha=password
    
    return this.httpClient.post<Users>("http://localhost:8080/usuarios/logar",userLogin).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        return userData;
       }
     )

    );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
