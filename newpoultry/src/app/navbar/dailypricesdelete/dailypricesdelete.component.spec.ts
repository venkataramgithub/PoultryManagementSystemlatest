import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailypricesdeleteComponent } from './dailypricesdelete.component';

describe('DailypricesdeleteComponent', () => {
  let component: DailypricesdeleteComponent;
  let fixture: ComponentFixture<DailypricesdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailypricesdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailypricesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
