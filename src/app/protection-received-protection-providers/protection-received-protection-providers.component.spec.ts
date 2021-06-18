import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionReceivedProtectionProvidersComponent } from './protection-received-protection-providers.component';

describe('ProtectionReceivedProtectionProvidersComponent', () => {
  let component: ProtectionReceivedProtectionProvidersComponent;
  let fixture: ComponentFixture<ProtectionReceivedProtectionProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionReceivedProtectionProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionReceivedProtectionProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
