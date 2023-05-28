import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPricesComponent } from './daily-prices.component';

describe('DailyPricesComponent', () => {
  let component: DailyPricesComponent;
  let fixture: ComponentFixture<DailyPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
