import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdspurchasedeleteComponent } from './birdspurchasedelete.component';

describe('BirdspurchasedeleteComponent', () => {
  let component: BirdspurchasedeleteComponent;
  let fixture: ComponentFixture<BirdspurchasedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdspurchasedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdspurchasedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
