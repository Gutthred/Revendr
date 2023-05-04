import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/services/company.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: boolean = false;

  loginForm = new FormGroup({
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
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
    private userService: UserService,
    private companyService: CompanyService
  ) {}

  getAuthenticated() {
    const user = this.userService.getUserByUserPassCompany(
      this.loginForm.controls.email.value.toLocaleLowerCase(),
      this.loginForm.controls.password.value,
      Number(this.loginForm.controls.company.value)
    );
    
    console.log(user);

    const company = this.companyService.getCompanyById(
      Number(this.loginForm.controls.company.value)
    );

    console.log(company);

    return user && company ? sessionStorage.setItem(
          'authUser',
          `${user.id}${user.email}${user.company}`
        )
      : (this.error = true);
  }

  onSubmit() {
    this.error = false;
    this.getAuthenticated();
  }

  toSignup() {
    this.router.navigateByUrl('/signup');
  }
}
