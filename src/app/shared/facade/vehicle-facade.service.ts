import { Injectable } from '@angular/core';
import { VehicleService } from '../core/async/vehicle.service';
import { VehicleStateService } from '../core/state/vehicle-state.service';
import { Vehicle, vehicleFilter } from '../models/vehicle.model';
import {
  Observable,
  distinctUntilChanged,
  shareReplay,
  map,
  combineLatest,
  take,
  switchMap,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleFacadeService {
  constructor(
    private vApi: VehicleService,
    private vState: VehicleStateService
  ) {}

  readonly allVehicles$ = this.vState
    .getState()
    .pipe(distinctUntilChanged(), shareReplay(1));

  readonly filters$ = this.vState.getState().pipe(
    map((state) => state.filters),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly filteredVehicles$ = combineLatest([
    this.allVehicles$,
    this.filters$,
  ]).pipe(
    map(([v, f]) => {
      return v.vehicles.filter((vehicles) => {
        if (!!f.model) {
          if (vehicles.model !== f.model) {
            return false;
          }
        }
        if (!!f.model && f.model !== '' && !!vehicles.model) {
          if (
            vehicles.model
              .toLocaleLowerCase()
              .includes(f.model.toLocaleLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });
    })
  );

  updateFilter(f: vehicleFilter){
    this.vState.setFilters(f);
  }

  loadVehicles(): Observable<Vehicle[]> {
    return this.vState.getState().pipe(
      take(1),
      switchMap((state) => {
        if (state.loaded) {
          return of(state.vehicles);
        } else {
          return this.vApi.getVehicle().pipe(
            tap((vehicle) => {
              this.vState.setVehicle(vehicle);
              this.vState.setLoaded(true);
            })
          );
        }
      })
    );
  }

  addVehicle(v: Vehicle): Observable<Vehicle> {
    return this.vApi.createVehicle(v).pipe(
      tap((res) => {
        this.vState.addVehicle(res);
      })
    );
  }

  editVehicle(v: Vehicle): Observable<Vehicle> {
    return this.vApi.editVehicle(v).pipe(
      tap((res) => {
        this.vState.editVehicle(res);
      })
    );
  }

  deleteVehicle(v: Vehicle): Observable<Vehicle> {
    return this.vApi
      .deleteVehicle(v)
      .pipe(tap(() => this.vState.deleteVehicle(v.id!)));
  }

}
