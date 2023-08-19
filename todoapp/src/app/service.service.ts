import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
// API='/api'
  API="http://localhost:3000/api/"
  constructor(private http:HttpClient) { 

   
  }


  getdetails(){
     return this.http.get(`${this.API}/getdetails`)
  }

  adddetails(details:any){
    return this.http.post(`${this.API}/add`,details)
  }

  deleteuser(){
    return this.http.delete(`${this.API}/delete`)
  }
  searchdetails(){
    return this.http.get(`${this.API}/search`)
  }
}
