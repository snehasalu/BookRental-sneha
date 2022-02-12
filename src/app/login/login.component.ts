import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from '../shared/member';
import {AuthService} from 'src/app/shared/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables 
  loginForm! : FormGroup;
  isSubmitted = false;
  errors = '';
  loginUser : any= new Member();
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authservice:AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //formControl fields
        Mname : ['',[Validators.required]],
        Contact : ['',[Validators.required]]
      }
    );
  }

  //get control for validation 
  get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){

    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    if(this.loginForm.valid){
      console.log("with Valid")
      this.errors='';
        //caling method from authservices
        this.authservice.loginVerify(this.loginForm.value)
        .subscribe(
          data=>{
            console.log(data);
            this.loginUser=data;
            //check the role based on rid it redirect to the respective omponent
            if(this.loginUser.Mid===0){
              console.log("Member");
              localStorage.setItem("Mname",this.loginUser.Mname);
              sessionStorage.setItem("Mname",this.loginUser.Mname);
              this.router.navigateByUrl('/member');
            }
            /*
            else if(this.loginUser.RoleId===2){
              console.log("Manager");
              localStorage.setItem("UserName",this.loginUser.UserName);
              localStorage.setItem("Accessrole",this.loginUser.RoleId)
              sessionStorage.setItem("UserName",this.loginUser.UserName);
              this.router.navigateByUrl('/manager');
            }
            */
            else{
              this.errors="sorry! no access"
            }
          },
          error=>{
            this.errors="invalid username or password.try agaain"
          }
        )
    }

    if(this.loginForm.invalid){
      console.log("Is Invalid");
      return;
    }
  }

}
