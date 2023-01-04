import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {
    Employeeid:any;
    Employeename:any;
    Employeesal:any;
    Employeecity:any;
    Employeeid1:any;
    Employeename1:any;
    Employeesal1:any;
    Employeecity1:any;
    upEmpID:number=0;
    empid:any;

    IsAdd:boolean= true;
    IsUpdate:boolean=false;
  constructor() { }

  employeesData:any[] = [
    {
    id:101,name:"Sachin",sal:1000,city:"Mumbai"
    },
    {
      id:102,name:"Rahul",sal:2000,city:"Bangalore",
    },
    {
      id:103,name:"Dhoni",sal:3000,city:"Ranchi",
    }
]

EmployeeAddForm(empid:any,empname:any,empsal:any,empcity:any){
  this.Employeeid = empid;
  this.Employeename = empname;
  this.Employeesal = empsal;
  this.Employeecity = empcity;
}

EmployeeModalForm(empid:any,empname:any,empsal:any,empcity:any){
  this.Employeeid1 = empid;
  this.Employeename1 = empname;
  this.Employeesal1 = empsal;
  this.Employeecity1 = empcity;
}
ViewData(empid:any,empname:any,empsal:any,empcity:any){
  this.upEmpID = empid; 
  this.EmployeeModalForm(empid,empname,empsal,empcity);
}

deleteData(val:any){
  
  this.employeesData.forEach((emid:any,index:any)=>{
    if(val == emid.id){
      this.employeesData.splice(index,1);
    }
  })
}

editData(empid:any,empname:any,empsal:any,empcity:any){
  this.upEmpID = empid; 
  this.IsAdd= false;
  this.IsUpdate = true;
  this.EmployeeAddForm(empid,empname,empsal,empcity);
}
AddData(){
  this.employeesData.unshift({
    id:this.Employeeid,
    name:this.Employeename,
    sal:this.Employeesal,
    city:this.Employeecity
  });
  this.employeesData.sort((emp1:any,emp2:any)=>emp1.id - emp2.id);
  this.EmployeeAddForm('','','','');
}
UpdateEmpData(){
  if(this.upEmpID > 0){
    let updateObj = {
      id:this.Employeeid,
      name:this.Employeename,
      sal:this.Employeesal,
      city:this.Employeecity
    };
    let data = this.employeesData.findIndex((val)=> val.id == this.upEmpID);
    this.employeesData[data] = updateObj;
    this.upEmpID = 0;
  }
}
  ngOnInit(): void {
  }

}
