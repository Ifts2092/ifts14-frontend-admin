import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) {
  }

  getList() {
      return this.http.get<any>(environment.apiUrl + '/api/settings')
  }

  
  save(items:any){
    return this.http.post<any>(environment.apiUrl + '/api/settings', items )
  }

  getOne(key:any) {
    return this.http.get<any>(environment.apiUrl + '/api/settings/' + key)
  }

  saveOne(item:any) {
    return this.http.post<any>(environment.apiUrl + '/api/settings/save', item )
  }

}
