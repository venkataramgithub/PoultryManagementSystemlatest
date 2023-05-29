import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedpurchasedeleteComponent } from './feedpurchasedelete.component';

describe('FeedpurchasedeleteComponent', () => {
  let component: FeedpurchasedeleteComponent;
  let fixture: ComponentFixture<FeedpurchasedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedpurchasedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedpurchasedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
