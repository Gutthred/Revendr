import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/core/async/company.service';
import { Company } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  error: boolean = false;
  company: Company[] = [];

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

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService
      .getCompany()
      .subscribe((company) => (this.company = company));
  }

  getCompanyAuth() {
    const company = this.company.filter(
      (company) => company.id === Number(this.signupForm.controls.company.value)
    );

    return company[0].isActive === true
      ? sessionStorage.setItem('authCompany', JSON.stringify(this.company[0].isActive))
      : (this.error = true);
  }

  onSubmit() {
    this.getCompanyAuth();
    if(this.error){
      alert('Empresa informada não existe ou está desativada.');
    } else {
      this.router.navigateByUrl('/vehicles');
    }
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }
}
