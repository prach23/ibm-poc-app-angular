import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';
import { Data } from 'src/app/services/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // title="this is a test"
  allDetails:Data[]=[];
  // public data:any;
  // public emp:any;

  

  constructor(private fs:FetchService, public router:Router) {
    this.get();
    
   }

  ngOnInit(): void {  }
  get(){
    this.fs.getDetails().subscribe((res)=>{
      this.allDetails=res;
      console.log(this.allDetails);
    })
  }
  getData(){
    return sessionStorage.getItem('user');
  }

  // getEmpList(){
  //   if(this.data){
  //     const dataList = this.data.List;
  //     let tempArr:any=[];
  //     for(let temp of dataList){
  //       this.fs.getDetails().subscribe((res:any)=>{
  //         tempArr.push(res.list[0]);
  //       })
  //     }
  //     console.log(tempArr);
  //     this.emp = tempArr;
  //   }
  // }

}
