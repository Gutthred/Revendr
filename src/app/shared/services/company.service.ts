import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company: Company[] = [
    {
      id: 1992,
      isActive: true,
    },
    {
      id: 9999,
      isActive: false,
    }
  ]

  constructor() { }


  getCompanies(){
    return this.company;
  }

  getCompanyById(id: number){
    return this.company.find((company) => company.id === id);
  }


}
