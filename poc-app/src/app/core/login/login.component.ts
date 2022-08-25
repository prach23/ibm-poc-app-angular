import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // title='this is a test'
  loginForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  isValidUser: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      user:new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    })
    // this.authService.logout();
  }

  ngOnInit(){
  }
  // saveData(){
  //   sessionStorage.setItem('user', JSON.stringify(this.loginForm.value.user));
  // }



  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.sendToken(this.loginForm.value.password) //the token is the password
      sessionStorage.setItem('user',JSON.stringify(this.loginForm.value.user))
      if(this.loginForm.value.password==='admin@123'){
        this.router.navigate(["dashboard"]);
      }
    }
  

  // onSubmit(){
  //   this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
  //   .subscribe((data)=>{
  //     if(data){
  //       this.router.navigate(["/dashboard"]);
  //     }
  //     this.isSubmitted=true;
  //     this.isValidUser=data;
  //     console.log(this.isSubmitted)
  //     console.log(this.isValidUser)
  //   });
  // }

}
}
