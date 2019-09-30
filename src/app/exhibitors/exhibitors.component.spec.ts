import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsComponent } from './exhibitors.component';

describe('ExhibitorsComponent', () => {
  let component: ExhibitorsComponent;
  let fixture: ComponentFixture<ExhibitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
