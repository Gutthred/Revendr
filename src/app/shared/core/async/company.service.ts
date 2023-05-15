import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly apiPath = `${environment.apiPath}/companies`;

  constructor(private httpClient: HttpClient) { }


  getCompany(): Observable<Company[]> {
  return this.httpClient.get<Company[]>(this.apiPath);
  }

  createCompany(company: Company) {
    return this.httpClient.post<Company>(this.apiPath, company);
  }

  editCompany(company: Company) {
    return this.httpClient.put<Company>(`${this.apiPath}/${company.id}`, company);
  }

  deleteCompany(company: Company) {
    return this.httpClient.delete<Company>(`${this.apiPath}/${company.id}`);
  }

}
