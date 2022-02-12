import { HttpClient } from '@angular/common/http';
import { isSyntaxError } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
 public loginVerify(member:Member){
   //calling webservices and passing username and password
   console.log(member);
   return this.httpClient.get(environment.apiUrl + "/api/members/login/" + member.Mname +'&'+ member.Contact)
  
 }
 //logout
 public logOut(){
   localStorage.removeItem("Mname");
   sessionStorage.removeItem("Mname");
 }
}
