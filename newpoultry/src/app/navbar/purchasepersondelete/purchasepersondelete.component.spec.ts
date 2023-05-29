import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepersondeleteComponent } from './purchasepersondelete.component';

describe('PurchasepersondeleteComponent', () => {
  let component: PurchasepersondeleteComponent;
  let fixture: ComponentFixture<PurchasepersondeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepersondeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepersondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
