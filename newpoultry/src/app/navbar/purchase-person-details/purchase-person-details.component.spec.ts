import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePersonDetailsComponent } from './purchase-person-details.component';

describe('PurchasePersonDetailsComponent', () => {
  let component: PurchasePersonDetailsComponent;
  let fixture: ComponentFixture<PurchasePersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
