import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserLogin} from '../interfaces/userLogin';
import { ConectorApiService } from './conector-api/conector-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpApi: ConectorApiService
  ) { 
  }
  postNewUser(body: any) : Observable<any>{
    return this.httpApi.postApiByHttpClient("/usuarios/cadastrar", body)
  }
  authenticate(username: string, password: string,) {
    const userLogin: UserLogin = new UserLogin();
    userLogin.usuario=username
    userLogin.senha=password
    
    return this.httpApi.postApiByHttpClient("http://localhost:8080/usuarios/logar",userLogin).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('password',password);
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
