import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotedVehiclesComponent } from './pages/promoted-vehicles/promoted-vehicles.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: '',
    component: PromotedVehiclesComponent,
  },
  {
    path: 'vehicle-list',
    component: VehicleListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class VehicleRoutingModule {}
