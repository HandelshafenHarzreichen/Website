import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCardComponent } from './sell-card.component';

describe('SellCardComponent', () => {
  let component: SellCardComponent;
  let fixture: ComponentFixture<SellCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellCardComponent]
    });
    fixture = TestBed.createComponent(SellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
