import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginComponent, LoginPageComponent],
  imports: [SharedModule, LoginRoutingModule],
  exports: [LoginPageComponent],
})
export class LoginModule {}
