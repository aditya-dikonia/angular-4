import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  minDate = {year: 2017, month: 1, day: 1};
  registrationForm: FormGroup;
  step_1 = true;
  step_2 = false;
  step_3 = false;
  step_4 = false;
  constructor(private fb:FormBuilder) { 
    this.registrationForm = this.fb.group({
      formStep_1: this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.email],
        dob: [null]
      }),
      formStep_2: this.fb.group({
        name: [null],
        email: [null],
        dob: [null]
      }),
      formStep_3: this.fb.group({
        name: [null],
        email: [null],
        dob: [null]
      }),
      formStep_4: this.fb.group({
        name: [null],
        email: [null],
        dob: [null]
      }),
    });
  }

  

  ngOnInit() {
  }

  showSteps(step){
    this.step_1 = false;
    this.step_2 = false;
    this.step_3 = false;
    this.step_4 = false;
    switch(step){
      case 1:
        this.step_1 = true;
        break;
      case 2:
        this.step_2 = true;
        break;
      case 3:
        this.step_3 = true;
        break;
      case 4:
        this.step_4 = true;
        break;
    }
  }
  
  addMember(formData){
    console.log(formData);
  }

}
