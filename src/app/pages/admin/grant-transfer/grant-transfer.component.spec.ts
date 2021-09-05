import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantTransferComponent } from './grant-transfer.component';

describe('GrantTransferComponent', () => {
  let component: GrantTransferComponent;
  let fixture: ComponentFixture<GrantTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
