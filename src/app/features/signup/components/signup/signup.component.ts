import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  error: boolean = false;

  signupForm = new FormGroup({
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    fname: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lname: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    company: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private router: Router,
    private companyService: CompanyService
  ) {}

  getCompanyAuth() {
    const company = this.companyService.getCompanyById(
      Number(this.signupForm.controls.company.value)
    );
    
    
    return company?.isActive === true
      ? sessionStorage.setItem('authUser', JSON.stringify(company))
      : (this.error = true);
  }

  onSubmit() {
    this.getCompanyAuth();
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }
}
