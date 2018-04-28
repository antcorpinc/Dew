import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionInfoComponent } from './roles-permissions-info.component';

describe('RolesPermissionInfoComponent', () => {
  let component: RolesPermissionInfoComponent;
  let fixture: ComponentFixture<RolesPermissionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesPermissionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
