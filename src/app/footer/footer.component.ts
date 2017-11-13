import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { MastersService } from '../services/masters.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  saveSuccess: boolean = false;
  saveFailure: boolean = false;
  signUpMessage: string = '';
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private master:MastersService) { 
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, 
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      phone: [null, 
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
        ])
      ]
    });
  }

  ngOnInit() {
  }

  signUp(formData){
    if(this.signupForm.valid){
      this.master.emailSignup(JSON.stringify(formData)).subscribe((response) => {
        this.saveSuccess = false;
        this.saveFailure = false;
        this.signUpMessage = response.message;
        if(response.status == 1){
          this.saveSuccess = true;
        }else{
          this.saveFailure = true;
        }
        this.signupForm.reset();
      });
    }else{
      Object.keys(this.signupForm.controls).forEach(field => {
        const control = this.signupForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
