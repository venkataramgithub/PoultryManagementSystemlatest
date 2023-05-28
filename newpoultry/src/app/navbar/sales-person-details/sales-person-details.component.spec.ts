import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonDetailsComponent } from './sales-person-details.component';

describe('SalesPersonDetailsComponent', () => {
  let component: SalesPersonDetailsComponent;
  let fixture: ComponentFixture<SalesPersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
