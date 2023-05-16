import { Injectable } from '@angular/core';
import { Vehicle, vehicleFilter } from '../../models/vehicle.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface VehicleState {
  vehicles: Vehicle[];
  filters: vehicleFilter;
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class VehicleStateService {
  constructor() {}

  private state$ = new BehaviorSubject<VehicleState>({
    vehicles: [],
    filters: {
      model: null,
      id: null,
    },
    loaded: false,
  });

  getState(): Observable<VehicleState> {
    return this.state$.asObservable();
  }

  setVehicle(v: Vehicle[]) {
    this.state$.next({ ...this.state$.getValue(), vehicles: v });
  }

  addVehicle(v: Vehicle) {
    const state = this.state$.getValue();
    this.state$.next({ ...state, vehicles: [...state.vehicles, v] });
  }

  editVehicle(v: Vehicle) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      vehicles: state.vehicles.map((vehicle) => {
        if (vehicle.id === v.id) {
          return v;
        }
        return vehicle;
      }),
    });
  }

  deleteVehicle(id: string){
    const state = this.state$.getValue();
    this.state$.next({...state, vehicles: state.vehicles.filter(r => r.id !== id)})
  }

  setLoaded(loaded: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loaded: loaded,
    });
  }

  setFilters(filters: vehicleFilter) {
    this.state$.next({
      ...this.state$.getValue(),
      filters: filters,
    });
  }
}
