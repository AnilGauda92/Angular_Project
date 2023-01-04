import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  templateUrl: './form-demo2.component.html',
  styleUrls: ['./form-demo2.component.css']
})
export class FormDemo2Component implements OnInit {
  myForm:any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      fullname:[],
      email:[],
      contact:[],
      gender:[]
    })
  }
  submitForm(val:any){
    console.log(val);
  }
}
