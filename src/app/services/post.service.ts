import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getList() {
      return this.http.get<any>(environment.apiUrl + '/api/posts')
  }

  getById(id: Number){
    return this.http.get<any>(environment.apiUrl + '/api/posts/'+ id)
  }

  save(item:any){
    return this.http.post<any>(environment.apiUrl + '/api/posts', item )
  }
  delete(id: Number){
    return this.http.delete<any>(environment.apiUrl + '/api/posts/'+ id)
  }
      
}
