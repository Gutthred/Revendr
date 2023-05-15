import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedVehiclesComponent } from './promoted-vehicles.component';

describe('PromotedVehiclesComponent', () => {
  let component: PromotedVehiclesComponent;
  let fixture: ComponentFixture<PromotedVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotedVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
