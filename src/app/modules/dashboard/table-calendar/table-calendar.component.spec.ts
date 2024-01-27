import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCalendarComponent } from './table-calendar.component';

describe('TableCalendarComponent', () => {
  let component: TableCalendarComponent;
  let fixture: ComponentFixture<TableCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
