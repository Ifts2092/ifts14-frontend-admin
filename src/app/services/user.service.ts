import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getList() {
      return this.http.get<any>(environment.apiUrl + '/api/users')
  }

  getById(id: Number){
    return this.http.get<any>(environment.apiUrl + '/api/users/'+ id)
  }

  save(item:any){
    return this.http.post<any>(environment.apiUrl + '/api/users', item )
  }
  delete(id: Number){
    return this.http.delete<any>(environment.apiUrl + '/api/users/'+ id)
  }
      
}
