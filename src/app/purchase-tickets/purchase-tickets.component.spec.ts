import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTicketsComponent } from './purchase-tickets.component';

describe('PurchaseTicketsComponent', () => {
  let component: PurchaseTicketsComponent;
  let fixture: ComponentFixture<PurchaseTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
