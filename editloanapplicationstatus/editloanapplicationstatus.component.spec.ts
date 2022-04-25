import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditloanapplicationstatusComponent } from './editloanapplicationstatus.component';

describe('EditloanapplicationstatusComponent', () => {
  let component: EditloanapplicationstatusComponent;
  let fixture: ComponentFixture<EditloanapplicationstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditloanapplicationstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditloanapplicationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
