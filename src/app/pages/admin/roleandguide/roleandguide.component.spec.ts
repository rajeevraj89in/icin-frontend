import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleandguideComponent } from './roleandguide.component';

describe('RoleandguideComponent', () => {
  let component: RoleandguideComponent;
  let fixture: ComponentFixture<RoleandguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleandguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleandguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
