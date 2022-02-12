import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Book} from './book'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]; 
  formData: Book = new Book(); 


  constructor(private httpClient: HttpClient) { }
   getAllbooks(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/books');
  }
  //2
  bindListbooks() {
    this.httpClient.get(environment.apiUrl + '/api/books')
      .toPromise().then(
        response => {
          console.log("from Service");
          console.log(response);
          this.books = response as Book[]
        }
      );
  }
}
