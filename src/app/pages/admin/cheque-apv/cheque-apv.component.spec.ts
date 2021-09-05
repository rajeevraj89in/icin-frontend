import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeApvComponent } from './cheque-apv.component';

describe('ChequeApvComponent', () => {
  let component: ChequeApvComponent;
  let fixture: ComponentFixture<ChequeApvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeApvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeApvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
