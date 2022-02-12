import { Component, OnInit } from '@angular/core';
import {RentService} from 'src/app/shared/rent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.scss']
})
export class RentlistComponent implements OnInit  {

  //declare variable
  page:number=1;
  filter:string;

  constructor(public rentServices:RentService ,
    private router:Router) { }

  ngOnInit(): void { 
      console.log("welcome to the loop")
     this.rentServices.bindListRents();
  }
  getrents(){
    //call service method
    this.rentServices.getAllRent().subscribe(
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
  updateRent(rentId:number){
      console.log(rentId);
      //navigate to edit from with seected employee details
      this.router.navigate(['employee',rentId])
  }

  //delete employee
  deleterent(empId:number){
    if(confirm("Are you sure you want to DELETE the record")){
      this.rentServices.deleteRent(empId).subscribe(
        response=>{
            this.rentServices.bindListRents();
        },
        error=>{
            console.log(error);
        });
      }
  }
}