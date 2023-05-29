import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalitydeleteComponent } from './mortalitydelete.component';

describe('MortalitydeleteComponent', () => {
  let component: MortalitydeleteComponent;
  let fixture: ComponentFixture<MortalitydeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortalitydeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortalitydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
