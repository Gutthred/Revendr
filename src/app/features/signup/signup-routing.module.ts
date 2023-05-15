import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [{ path: '', component: SignupPageComponent },];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class SignupRoutingModule {}
