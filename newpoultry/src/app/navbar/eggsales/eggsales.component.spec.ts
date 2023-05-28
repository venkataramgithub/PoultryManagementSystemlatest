import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsalesComponent } from './eggsales.component';

describe('EggsalesComponent', () => {
  let component: EggsalesComponent;
  let fixture: ComponentFixture<EggsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
