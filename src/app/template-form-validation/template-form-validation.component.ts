import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {

  constructor() { }

  contact:contact;
  ngOnInit(): void {
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"",
      isToc:true,
      email:"",
    };
  }
 
  onSubmit = contactForm => console.log(contactForm.value);

}

export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isToc:boolean;
  email:string;
}
