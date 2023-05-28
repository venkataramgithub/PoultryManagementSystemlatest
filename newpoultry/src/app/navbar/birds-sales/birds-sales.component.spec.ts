import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsSalesComponent } from './birds-sales.component';

describe('BirdsSalesComponent', () => {
  let component: BirdsSalesComponent;
  let fixture: ComponentFixture<BirdsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
