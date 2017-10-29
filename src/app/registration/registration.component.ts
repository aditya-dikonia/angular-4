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
  basicForm: FormGroup;
  educationForm: FormGroup;
  spritualForm: FormGroup;
  personalForm: FormGroup;
  partnerForm: FormGroup;
  step_1 = true;
  step_2 = false;
  step_3 = false;
  step_4 = false;
  step_5 = false;
  constructor(private fb:FormBuilder) { 
    this.basicForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.email],
      dob: [null],
      gender: [null],
      profile: [null],
      religion: [null],
      mothertongue: [null],
      community: [null],
      phone: [null],
      maritalstatus: [null],
      country: [null],
      state: [null],
      city: [null]
    });
    this.educationForm = this.fb.group({
      education_level: [null, Validators.required],
      education_field: [null],
      colleges_attended: [null],
      work: [null],
      designation: [null],
      employer_name: [null],
      annual_income: [null]
    });
    this.spritualForm = this.fb.group({
      chant: [null],
      councelling: [null],
      initiated: [null],
      spiritual_master: [null],
      principles: [null],
      active_service: [null],
      temple_associated: [null],
      leader: [null]
    });
    this.personalForm = this.fb.group({
      height: [null],
      body_type: [null],
      skin_type: [null],
      mobile_number: [null],
      about: [null],
      disability: [null],
      photo: [null]
    });
    this.partnerForm = this.fb.group({
      partner_age: [null],
      partner_height: [null],
      partner_maritalstatus: [null],
      partner_mothertongue: [null],
      partner_spiritual_master: [null],
      partner_spiritual_location: [null],
      partner_spiritual_status: [null],
      partner_country: [null],
      partner_state: [null],
      partner_education: [null],
      partner_working_with: [null],
      partner_profession_area: [null],
      partner_annual_income: [null],
      partner_profile_created: [null],
      partner_diet: [null]
    });
  }

  

  ngOnInit() {
  }

  showSteps(step){
    this.step_1 = false;
    this.step_2 = false;
    this.step_3 = false;
    this.step_4 = false;
    this.step_5 = false;
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
      case 5:
        this.step_5 = true;
        break;
    }
  }
  
  addMember(step, formData){
    console.log(formData);
    if(step){
      this.showSteps(step);
    }
  }

}