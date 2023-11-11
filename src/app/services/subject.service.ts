import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http: HttpClient) {
  }

  getList(){
    return this.http.get<any>(environment.apiUrl + '/api/subject')
  }
  getById(id: Number){
    return this.http.get<any>(environment.apiUrl + '/api/subject/'+ id)
  }
  getByCareerId(careerId: Number){
    return this.http.get<any>(environment.apiUrl + '/api/subject/bycareer/'+ careerId)
  }
  save(item:any){
    return this.http.post<any>(environment.apiUrl + '/api/subject', item )
  }
  delete(id: Number){
    return this.http.delete<any>(environment.apiUrl + '/api/subject/'+ id)
  }
}
