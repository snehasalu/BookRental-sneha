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
//declare variable empid
Id: number;
constructor(public memberServices: MemberService,
  private route: ActivatedRoute,
  private toastrService:ToastrService) { }
  ngOnInit(): void {
    console.log("updated sucessfully")
    this.Id = this.route.snapshot.params['Id']
    if (this.Id != 0 || this.Id != null) {
      //get employee
      this.memberServices.getMemberById(this.Id).subscribe(
        result => {
          console.log(result);
          this.memberServices.formData=Object.assign({},result);
        },
        error => {
          console.log(error);
        }
      )
    }

  }
  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.memberServices.formData.Mid;

    if(addId == 0 || addId == null){
      //insert
      this.insertMemberRecord(form);
      
    }
    else{
      //update
      this.updateMemberRecord(form);
      this.toastrService.success("member record updated sucesfully");
      console.log("updated succesfully")
    }
  }

  //insert method 
  insertMemberRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.memberServices.insertMemberById(form.value).subscribe(
      result =>{
        console.log(result);
        //call resetform for clean the data
        this.resetForm(form);
        this.toastrService.success("member record updated sucesfully");
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  //update
  updateMemberRecord(form?:NgForm){
    console.log("Updatinging a record...");
    this.memberServices.updateMemberById(form.value).subscribe(
      result =>{
        console.log(result);
        //call resetform for clean the data
        this.resetForm(form);
        this.toastrService.success("employee record updated sucesfully");
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  //clear all contents
  resetForm(form?:NgForm){
    if(form !=null){
      form.resetForm();
    }
  }
}
