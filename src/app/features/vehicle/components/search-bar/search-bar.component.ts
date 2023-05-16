import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/shared/core/async/vehicle.service';
import { Vehicle } from 'src/app/shared/models/vehicle.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  vehicleForm = new FormGroup({
    vehicle: new FormControl('', { nonNullable: true }),
  });

  vehicle: Vehicle[] = [];
  error: boolean = false;

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.vehicleService
      .getVehicle()
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }

  onSearch() {
    const selectedVehicle = this.getVehicleByIdModel(
      this.vehicleForm.controls.vehicle.value.toLocaleLowerCase()
    );

    if (Array.isArray(selectedVehicle) && selectedVehicle.length !== 0) {
      sessionStorage.setItem('model', JSON.stringify(selectedVehicle));
      this.router.navigateByUrl('/vehicles/list');
    }
    if (!Array.isArray(selectedVehicle)) {
      this.router.navigateByUrl(`vehicles/details/id/${selectedVehicle!.id}`);
    } else {
      this.error = true;
    }
  }

  getVehicleByIdModel(x: string) {
    return x.startsWith('#')
      ? this.vehicle.find((vehicle) => vehicle.code === x)
      : this.vehicle.filter((vehicle) => vehicle.model === x);
  }
}
