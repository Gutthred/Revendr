import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutingModule {}
