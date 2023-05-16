import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  readonly apiPath = `${environment.apiPath}/users`

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiPath);
  }

  getUserById(userId: number){
    return this.httpClient.get<User>(`${this.apiPath}/${userId}`)
  }

  createUser(user: User){
    return this.httpClient.post<User>(this.apiPath, user);
  }

  editUser(user: User){
    return this.httpClient.put<User>(`${this.apiPath}/${user.id}`, user);
  }

  deleteUser(user: User){
    return this.httpClient.delete<User>(`${this.apiPath}/${user.id}`);
  }

}
