import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) {
  }

  getList(){
    return this.http.get<any>(environment.apiUrl + '/api/career')
  }

  getById(id: Number){
    return this.http.get<any>(environment.apiUrl + '/api/career/'+ id)
  }

  save(item:any){
    return this.http.post<any>(environment.apiUrl + '/api/career', item )
  }
  delete(id: Number){
    return this.http.delete<any>(environment.apiUrl + '/api/career/'+ id)
  }
}
