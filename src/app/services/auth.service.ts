import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import  { AuthResponse } from '../interfaces/AuthResponse'
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username:string, password:string ) {
        return this.http.post<AuthResponse>(environment.apiUrl + '/api/auth/login', {username, password})
          .pipe(
            tap((res:any) => {
               return this.setSession(res)
            }
          ));
    }
          
    private setSession(authResult: any) {

        let token = authResult.token;
        if(token){
            
            let tokenParts = token.split('.');
            let payload:any = null;
            let exp: any = null;
            let iat: any = null;

            if(tokenParts && tokenParts.length > 1 ){
                payload = atob(tokenParts[1])
                let days = 1;
                //iat = moment(JSON.parse(payload).iat*1000).add(1,'days').unix();
                exp  = (JSON.parse(payload).iat*1000)+ (days * 86400000);
                let date = new Date(exp);
                
                localStorage.setItem('id_token', authResult.token);
                localStorage.setItem("expires_at", exp );

            } else {
                console.log("token fail");
                this.logout()
            }
            
        }
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        let token = localStorage.getItem('id_token');
        let exp:any = localStorage.getItem("expires_at");
    
        let date = new Date(exp);
    
        if(exp < new Date()){
          return false;
        }
    
        if(token){
          return true;
        }
    
        return false;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }


}
 