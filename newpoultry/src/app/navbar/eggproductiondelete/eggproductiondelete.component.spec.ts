import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggproductiondeleteComponent } from './eggproductiondelete.component';

describe('EggproductiondeleteComponent', () => {
  let component: EggproductiondeleteComponent;
  let fixture: ComponentFixture<EggproductiondeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggproductiondeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggproductiondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
