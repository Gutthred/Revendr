import { NgModule } from '@angular/core';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [SignupComponent, SignupPageComponent],
  imports: [SharedModule, SignupRoutingModule],
  exports: [SignupPageComponent],
})
export class SignupModule {}
