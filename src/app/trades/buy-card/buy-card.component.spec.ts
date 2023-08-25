import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCardComponent } from './buy-card.component';

describe('BuyCardComponent', () => {
  let component: BuyCardComponent;
  let fixture: ComponentFixture<BuyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCardComponent]
    });
    fixture = TestBed.createComponent(BuyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
