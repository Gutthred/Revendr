import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { VehicleService } from 'src/app/shared/core/async/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle[] = [];
  promotedVehicle: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService
      .getVehicle()
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }

  getPromotedVehicles() {
    return this.vehicle.filter((vehicle) => vehicle.isPromoted === true);
    
  }

  getUnpromotedVehicles() {
    return this.vehicle.filter((vehicle) => vehicle.isPromoted === false);
  }
}
