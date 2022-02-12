import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MemberService} from 'src/app/shared/member.service'

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {

 //declare variable
 page:number=1;
 filter:string;

 constructor(public memberServices:MemberService,
   private router:Router) { }

 ngOnInit(): void { //lifecycle hook
     //life cyclehook
     console.log("welcome to the loop")
     //1
    // this.getEmployees();
    //2
    this.memberServices.bindListMembers();
 }

 //1 get all employee
 getMembers(){
   //call service method
   this.memberServices.getAllMember().subscribe(
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
 //edit employee--update
 updateMember(Mid:number){
     console.log(Mid);
     //navigate to edit from with seected employee details
     this.router.navigate(['member',Mid])
 }


}
