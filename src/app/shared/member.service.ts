import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
   //retrive all data from getall employees--import httpclient
   members: Member[]; //all data
   formData: Member = new Member(); //one employee
 
   constructor(private httpClient: HttpClient) { }
 
   //Get all employees
   getAllMember(): Observable<any> {
     //api/employees  
     return this.httpClient.get(environment.apiUrl + '/api/members');
   }
   //2
   bindListMembers() {
     this.httpClient.get(environment.apiUrl + '/api/members')
       .toPromise().then(
         response => {
           console.log("from Service");
           console.log(response);
           this.members = response as Member[]
         }
       );
   }
   //get employee by id
   getMemberById(id: number): Observable<any> {
     return this.httpClient.get(environment.apiUrl + '/api/members/' + id);
   }
   
   //insert employee
   insertMemberById(member:Member): Observable<any> {
     return this.httpClient.post(environment.apiUrl + '/api/members', member);
   }
   //update employee
   updateMemberById(member:Member): Observable<any> {
     return this.httpClient.put(environment.apiUrl + '/api/members', member);
   }
}
