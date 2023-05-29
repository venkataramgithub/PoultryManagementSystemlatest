import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersondeleteComponent } from './salespersondelete.component';

describe('SalespersondeleteComponent', () => {
  let component: SalespersondeleteComponent;
  let fixture: ComponentFixture<SalespersondeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespersondeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
