import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/core/async/company.service';
import { UserService } from 'src/app/shared/core/async/user.service';
import { Company } from 'src/app/shared/models/company.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  users: User[] = [];
  companies: Company[] = [];

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

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => (this.users = users));
    this.companyService
      .getCompany()
      .subscribe((companies) => (this.companies = companies));
  }

  getAuthenticated() {
    const user = this.users.filter((user) => {
      this.loginForm.controls.email.value.toLocaleLowerCase() === user.email,
        this.loginForm.controls.password.value === user.password;
    });

    const company = this.companies.filter(
      (company) => Number(this.loginForm.controls.company.value) === company.id
    );

    if (user && company) {
      sessionStorage.setItem(
        'authUser',
        `${user}${company}`
      );
      this.router.navigateByUrl('/vehicles');
    } else {
      this.error = true;
    }
  }

  onSubmit() {
    this.error = false;
    this.getAuthenticated();
  }

  toSignup() {
    this.router.navigateByUrl('/signup');
  }
}
