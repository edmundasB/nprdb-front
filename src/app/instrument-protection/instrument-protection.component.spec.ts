import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentProtectionComponent } from './instrument-protection.component';

describe('InstrumentProtectionComponent', () => {
  let component: InstrumentProtectionComponent;
  let fixture: ComponentFixture<InstrumentProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
