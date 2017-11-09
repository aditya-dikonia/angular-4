import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { MastersService } from '../services/masters.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  minDate = {year: 1945, month: 1, day: 1};
  maxDate = {year: 1999, month: 12, day: 1};
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
  member_id: number;
  Body;
  profile_pic;
  saveSuccess: boolean;
  errorMessage: string;
  pictureName;
  submit_form: boolean = false;
  constructor(private fb: FormBuilder, private master: MastersService) { 
    this.basicForm = this.fb.group({
      name: [null, Validators.required],
      email: [null,Validators.email],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      create_for: [null, Validators.required],
      religion: [null, Validators.required],
      mother_tongue: [null, Validators.required],
      community: [null, Validators.required],
      mobile: [null, Validators.required],
      marital_status: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      member_id: [0]
    });
    this.educationForm = this.fb.group({
      education_level: [null, Validators.required],
      education_field: [null, Validators.required],
      college_attanded: [null, Validators.required],
      working_with: [null, Validators.required],
      designation: [null, Validators.required],
      employer_name: [null, Validators.required],
      annual_income: [null, Validators.required],
      member_id: [0]
    });
    this.spritualForm = this.fb.group({
      chant_rounds: [null, Validators.required],
      undergone_marriage_counselling: [null, Validators.required],
      initiated: [null, Validators.required],
      initiating_spiritual_master: [null, Validators.required],
      regulative_principles: [null, Validators.required],
      active_service: [null, Validators.required],
      associated_temple: [null, Validators.required],
      menter: [null, Validators.required],
      member_id: [0]
    });
    this.personalForm = this.fb.group({
      height: [null, Validators.required],
      body_type: [null, Validators.required],
      skin_tone: [null, Validators.required],
      about: [null, Validators.required],
      disability: [null, Validators.required],
      photo: [null],
      profile_pic : [null, Validators.required],
      member_id: [0]
    });
    this.partnerForm = this.fb.group({
      partner_age_from: [null, Validators.required],
      partner_age_to: [null, Validators.required],
      partner_height_from: [null, Validators.required],
      partner_height_to: [null, Validators.required],
      partner_marital_status: [null, Validators.required],
      partner_mother_tongue: [null, Validators.required],
      partner_spiritual_master: [null, Validators.required],
      partner_spiritual_location: [null, Validators.required],
      partner_spiritual_status: [null, Validators.required],
      partner_country: [null, Validators.required],
      partner_state: [null, Validators.required],
      partner_education: [null, Validators.required],
      partner_working_with: [null, Validators.required],
      partner_professional_area: [null, Validators.required],
      partner_annual_income_from: [null, Validators.required],
      partner_annual_income_to: [null, Validators.required],
      partner_created_by: [null, Validators.required],
      partner_diet: [null, Validators.required],
      member_id: [0]
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
    this.member_id = 0;
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
    this.submit_form = false;
    if(step == 2){
      if(this.basicForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.basicForm);
      }
    }
    if(step == 3){
      if (this.educationForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.educationForm);
      }
    }
    if(step == 4){
      if (this.spritualForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.spritualForm);
      }
    }
    if(step == 5){
      if (this.personalForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.personalForm);
      }
    }
    if(step == 0){
      if (this.partnerForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.partnerForm);
      }
    }
    if(this.submit_form){
      formData.current_step = (step) ? (parseInt(step)-1) : 5;
      if(step){
        this.showSteps(step);
      }else{
        this.showSteps(1);
      }
      this.master.insertData(JSON.stringify(formData)).subscribe((allData) => {
        this.member_id = allData.id;
        if(allData.error == 0){
          this.partnerForm.reset();
          this.personalForm.reset();
          this.spritualForm.reset();
          this.educationForm.reset();
          this.basicForm.reset();
          if (allData.message){
              this.saveSuccess = true;
          }
          else{
              this.saveSuccess = false;
          }
        }
      });
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched();
    });
  }

  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      var data = fileBrowser.files[0];
      var dataname = data.name;
      let body:FormData = new FormData();
      body.append('uploadFile', data, dataname);
      this.master.UploadPic(body).subscribe((image) => {
        if(image.error == 1){
          this.errorMessage = image.message;
        }else{
          this.profile_pic = image.profile_pic;
          this.errorMessage = '';
        }
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
