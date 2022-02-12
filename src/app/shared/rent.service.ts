import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rent } from './rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  rents: Rent[]; //all data
  formData: Rent = new Rent(); 

  constructor(private httpClient: HttpClient) { }

  getAllRent(): Observable<any> {
    
    return this.httpClient.get(environment.apiUrl + '/api/rents');
  }
  //2
  bindListRents() {
    this.httpClient.get(environment.apiUrl + '/api/rents')
      .toPromise().then(
        response => {
          console.log("from Service");
          console.log(response);
          this.rents = response as Rent[]
        }
      );
  }
  getRentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/rents/' + id);
  }
  //insert 
  insertRentById(rent:Rent): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/rents', rent);
  }
  //delete
  deleteRent(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/rents/" + id);
  }
}

