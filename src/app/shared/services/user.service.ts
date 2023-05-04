import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[] = [
    {
      id: 1,
      fname: 'Fabio',
      lName: 'Silva',
      user: 'fsilva',
      email: 'fabio@fabio.com',
      password: 'fabio123',
      company: 1992,
    },
    {
      id: 2,
      fname: 'Admin',
      lName: 'Administrator',
      user: 'admin',
      email: 'admin@admin.com',
      password: 'admin',
      company: 1992,
    },
  ];

  constructor() {}

  getAllUsers() {
    return this.user;
  }

  getUserByUserPassCompany(email: string, pass: string, company: number) {
    return this.user.find(
      (user) =>
        user.email === email &&
        user.password === pass &&
        user.company === company
    );
  }
}
