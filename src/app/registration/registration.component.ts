import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private fb:FormBuilder) { 
    this.registrationForm = fb.group({
      name: [null],
      dob: [null],
      email: [null]
    });
  }

  registrationForm: FormGroup;

  ngOnInit() {
  }

  addMember(formData){
    console.log(formData);
  }

}
