import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:3008';

  GetUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}/users`)
  }
}
