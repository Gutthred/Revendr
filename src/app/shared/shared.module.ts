import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const sharedComponent = [FooterComponent, HeaderComponent];

const sharedModule = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
  HttpClientModule
];

@NgModule({
  declarations: [...sharedComponent],
  imports: [...sharedModule],
  exports: [...sharedModule, ...sharedComponent],
})
export class SharedModule {}
