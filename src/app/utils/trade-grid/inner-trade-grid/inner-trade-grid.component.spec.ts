import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerTradeGridComponent } from './inner-trade-grid.component';

describe('InnerTradeGridComponent', () => {
  let component: InnerTradeGridComponent;
  let fixture: ComponentFixture<InnerTradeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerTradeGridComponent]
    });
    fixture = TestBed.createComponent(InnerTradeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
