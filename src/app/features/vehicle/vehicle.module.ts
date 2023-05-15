import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module'
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PromotedVehiclesComponent } from './pages/promoted-vehicles/promoted-vehicles.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

@NgModule({
  declarations: [
    VehicleComponent,
    PromotedVehiclesComponent,
    VehicleListComponent,
    SearchBarComponent,
  ],
  imports: [SharedModule, VehicleRoutingModule],
  exports: [PromotedVehiclesComponent, VehicleListComponent],
})
export class VehicleModule {}
