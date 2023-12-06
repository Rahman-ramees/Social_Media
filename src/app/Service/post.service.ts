import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3008';
  constructor(private http:HttpClient) { }

  addPost(data:any):Observable<any>{
    const url = `${this.apiUrl}/addPost`
    return this.http.post(url,data)
  }
}
