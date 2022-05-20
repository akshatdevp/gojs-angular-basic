import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVRTREEComponent } from './ivr-tree.component';

describe('IVRTREEComponent', () => {
  let component: IVRTREEComponent;
  let fixture: ComponentFixture<IVRTREEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVRTREEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IVRTREEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
