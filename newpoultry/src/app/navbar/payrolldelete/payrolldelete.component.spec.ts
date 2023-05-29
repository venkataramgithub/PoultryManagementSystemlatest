import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolldeleteComponent } from './payrolldelete.component';

describe('PayrolldeleteComponent', () => {
  let component: PayrolldeleteComponent;
  let fixture: ComponentFixture<PayrolldeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrolldeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrolldeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
