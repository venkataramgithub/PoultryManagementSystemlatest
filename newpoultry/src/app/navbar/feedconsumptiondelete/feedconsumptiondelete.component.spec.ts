import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedconsumptiondeleteComponent } from './feedconsumptiondelete.component';

describe('FeedconsumptiondeleteComponent', () => {
  let component: FeedconsumptiondeleteComponent;
  let fixture: ComponentFixture<FeedconsumptiondeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedconsumptiondeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedconsumptiondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
