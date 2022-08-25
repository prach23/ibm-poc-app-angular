import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/services/data';
import { FetchService } from 'src/app/services/fetch.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allDetails:Data[]=[];
  loginForm = new FormGroup({
    id: new FormControl(),
    firstName:new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    imageUrl: new FormControl(),
    contactNumber: new FormControl(),
    
  });

  dataBody:Data={
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    contactNumber:0,
    salary:0,
    age:0,
    imageUrl:''
  }

  constructor(private fs:FetchService, private router:Router, private formBuilder: FormBuilder) {
    this.loginForm = this.createFormGroup(formBuilder);
    // this.get();
   }

   createFormGroup(formBuilder: FormBuilder){
    return formBuilder.group({
      id:0,
      firstName:'',
      lastName:'',
      email:'',
      contactNumber:0,
      salary:0,
      age:0,
      imageUrl:''
    })
   }


  ngOnInit(): void {

  }
  postData(){
    this.fs.createData(this.dataBody).subscribe({next:(res)=>{
      this.dataBody = res;
      console.log(this.dataBody);
    }})

  }

  // get(){
  //   this.fs.getDetails().subscribe((res)=>{
  //     this.allDetails = res;
  //   });
  // }

  onSubmit(){
    console.log(this.loginForm.value);
  }

}

