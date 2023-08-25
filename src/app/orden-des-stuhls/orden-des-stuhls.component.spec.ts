import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDesStuhlsComponent } from './orden-des-stuhls.component';

describe('OrdenDesStuhlsComponent', () => {
  let component: OrdenDesStuhlsComponent;
  let fixture: ComponentFixture<OrdenDesStuhlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenDesStuhlsComponent]
    });
    fixture = TestBed.createComponent(OrdenDesStuhlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
