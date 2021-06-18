import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyReferenceComponent } from './counterparty-reference.component';

describe('CounterpartyReferenceComponent', () => {
  let component: CounterpartyReferenceComponent;
  let fixture: ComponentFixture<CounterpartyReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartyReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
