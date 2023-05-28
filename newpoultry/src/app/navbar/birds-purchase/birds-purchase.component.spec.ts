import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsPurchaseComponent } from './birds-purchase.component';

describe('BirdsPurchaseComponent', () => {
  let component: BirdsPurchaseComponent;
  let fixture: ComponentFixture<BirdsPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
