import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsalesdeleteComponent } from './eggsalesdelete.component';

describe('EggsalesdeleteComponent', () => {
  let component: EggsalesdeleteComponent;
  let fixture: ComponentFixture<EggsalesdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsalesdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsalesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
