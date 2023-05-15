import { Injectable } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
 
  readonly apiPath = `${environment.apiPath}/vehicles`

  constructor(private httpClient: HttpClient) {}


  getVehicle(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.apiPath);
  }

  createVehicle(vehicle: Vehicle){
    return this.httpClient.post<Vehicle>(this.apiPath, vehicle);
  }

  editVehicle(vehicle: Vehicle){
    return this.httpClient.put<Vehicle>(`${this.apiPath}/${vehicle.id}`, vehicle);
  }

  deleteVehicle(vehicle: Vehicle){
    return this.httpClient.delete<Vehicle>(`${this.apiPath}/${vehicle.id}`)
  }

 
}
