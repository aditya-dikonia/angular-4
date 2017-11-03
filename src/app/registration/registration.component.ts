import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MastersService } from '../services/masters.service';

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

  marital_status;
  age;
  mother_tongues;
  religions;
  education_level;
  annual_income;
  work_withs;
  community;
  skin_tone;
  diet;
  body_type;
  create_for;
  countrys;
  heights;
  Profession;
  states;
  cities;
  selectedValue : {};
  partnerState;
  basic;
  education;
  spritual;
  personal;
  partner;
  constructor(private fb: FormBuilder, private master: MastersService) { 
    this.basicForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.email],
      dob: [null],
      gender: [null, Validators.required],
      profile: [null, Validators.required],
      religion: [null, Validators.required],
      mothertongue: [null, Validators.required],
      community: [null, Validators.required],
      phone: [null, Validators.required],
      maritalstatus: [null],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required]
    });
    this.educationForm = this.fb.group({
      education_level: [null, Validators.required],
      education_field: [null, Validators.required],
      colleges_attended: [null, Validators.required],
      work: [null, Validators.required],
      designation: [null, Validators.required],
      employer_name: [null, Validators.required],
      annual_income: [null, Validators.required]
    });
    this.spritualForm = this.fb.group({
      chant: [null, Validators.required],
      councelling: [null, Validators.required],
      initiated: [null, Validators.required],
      spiritual_master: [null, Validators.required],
      principles: [null, Validators.required],
      active_service: [null, Validators.required],
      temple_associated: [null, Validators.required],
      leader: [null, Validators.required]
    });
    this.personalForm = this.fb.group({
      height: [null, Validators.required],
      body_type: [null, Validators.required],
      skin_type: [null, Validators.required],
      age: [null, Validators.required],
      about: [null, Validators.required],
      disability: [null, Validators.required],
      photo: [null]
    });
    this.partnerForm = this.fb.group({
      partner_age_from: [null, Validators.required],
      partner_age_to: [null, Validators.required],
      partner_height_from: [null, Validators.required],
      partner_height_to: [null, Validators.required],
      partner_maritalstatus: [null, Validators.required],
      partner_mothertongue: [null, Validators.required],
      partner_spiritual_master: [null, Validators.required],
      partner_spiritual_location: [null, Validators.required],
      partner_spiritual_status: [null, Validators.required],
      partner_country: [null, Validators.required],
      partner_state: [null, Validators.required],
      partner_education: [null, Validators.required],
      partner_working_with: [null, Validators.required],
      partner_profession_area: [null, Validators.required],
      partner_annual_income_from: [null, Validators.required],
      partner_annual_income_to: [null, Validators.required],
      partner_profile_created: [null, Validators.required],
      partner_diet: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.master.getMaritalStatus().subscribe((masters) => {
      this.marital_status = masters.marital_status;
      this.mother_tongues = masters.mother_tongues;
      this.age = masters.age;
      this.religions = masters.religions;
      this.education_level = masters.education_level;
      this.annual_income = masters.annual_income;
      this.work_withs = masters.work_withs;
      this.community = masters.community;
      this.skin_tone = masters.skin_tone;
      this.diet = masters.diet;
      this.body_type = masters.body_type;
      this.create_for = masters.create_for;
      this.heights = masters.heights;
      this.countrys = masters.countrys;
      this.Profession = masters.Profession;
    });
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
    if(step){
      this.showSteps(step);
    }
    if(step == 2){
      localStorage.setItem('basicForm', JSON.stringify(formData));
    }
    else if(step == 3){
      localStorage.setItem('educationForm', JSON.stringify(formData));
    }
    else if(step == 4){
      localStorage.setItem('spritualForm', JSON.stringify(formData));
    }
    else if(step == 5){
      localStorage.setItem('personalForm', JSON.stringify(formData));
    }
    else if(step == 0){
      this.basic = localStorage.getItem('basicForm');
      this.education = localStorage.getItem('educationForm');
      this.spritual = localStorage.getItem('spritualForm');
      this.personal = localStorage.getItem('personalForm');
      var body = this.basic + this.education + this.spritual + this.personal + JSON.stringify(formData);
      this.master.insertData(body).subscribe((allData) => {
        console.log(allData);
      });
    }
  }

  getState(country){
    this.master.getState(country).subscribe((states) => {
      this.states = states.states;
    });
  }
  getCity(state){
    this.master.getCity(this.selectedValue,state).subscribe((city) =>{
      this.cities = city.cities;
    });
  }
  getParterState(country){
    this.master.getState(country).subscribe((partnerState) => {
      this.partnerState = partnerState.states;
    });
  }

}
