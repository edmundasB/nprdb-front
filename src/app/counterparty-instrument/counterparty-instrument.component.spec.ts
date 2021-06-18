import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyInstrumentComponent } from './counterparty-instrument.component';

describe('CounterpartyInstrumentComponent', () => {
  let component: CounterpartyInstrumentComponent;
  let fixture: ComponentFixture<CounterpartyInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartyInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
