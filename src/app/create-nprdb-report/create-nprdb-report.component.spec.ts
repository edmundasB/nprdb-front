import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNprdbReportComponent } from './create-nprdb-report.component';

describe('CreateNprdbReportComponent', () => {
  let component: CreateNprdbReportComponent;
  let fixture: ComponentFixture<CreateNprdbReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNprdbReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNprdbReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
