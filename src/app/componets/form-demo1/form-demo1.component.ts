import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo1',
  templateUrl: './form-demo1.component.html',
  styleUrls: ['./form-demo1.component.css']
})
export class FormDemo1Component implements OnInit {
  user:any={
    firstname:'',
    lastname:'',
    email:'',
    gender:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  sumbitMyForm(myForm:any){
    console.log( myForm.controls);
    // myForm.controls.touched();
    Object.keys(myForm.controls).forEach(key => {
      myForm.controls[key].markAsTouched();
    });
  }
}
