import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsalesdeleteComponent } from './birdsalesdelete.component';

describe('BirdsalesdeleteComponent', () => {
  let component: BirdsalesdeleteComponent;
  let fixture: ComponentFixture<BirdsalesdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsalesdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsalesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
