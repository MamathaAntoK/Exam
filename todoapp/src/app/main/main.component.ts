import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todoform={
    description:'',
    status:''
  }
list:any=[] 
 constructor(private service:ServiceService) { }

  ngOnInit():void {
   
  }

  getdetails(){
    this.service.getdetails().subscribe(res=>{
      this.list=res
    })

   
  }

  savetodo(){
    this.service.adddetails(this.todoform).subscribe(res=>{
console.log(res);
alert("Todo List Saved Successfully")
    })
  }

}
