import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointLiabilitiesComponent } from './joint-liabilities.component';

describe('JointLiabilitiesComponent', () => {
  let component: JointLiabilitiesComponent;
  let fixture: ComponentFixture<JointLiabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointLiabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
