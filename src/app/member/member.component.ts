import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/shared/member.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.scss']
})
export class MComponent implements OnInit {
  constructor(public memberServices : MemberService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.memberServices.formData.Mid;
    
    //insert or update

    if(addId == 0 || addId == null){
      //insert
      this.insertMemberRecord(form)
      
    }
    else{
      //update
    }
  }

  //insert method 
  insertMemberRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.memberServices.insertMemberById(form.value).subscribe(
      result =>{
        console.log(result);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}