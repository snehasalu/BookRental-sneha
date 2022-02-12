import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from 'src/app/shared/book.service'
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  constructor(public bookServices:BookService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("welcome to the loop")
     this.bookServices.bindListbooks();
  }
  getbooks(){
    //call service method
    this.bookServices.getAllbooks().subscribe(
      responce=>{
        console.log("correct")
        console.log(responce);
      },
      error=>{
        console.log("something wrong")
        console.log(error);
      }
    );
  }

}
