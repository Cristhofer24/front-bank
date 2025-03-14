import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteAdminComponent } from './expediente-admin.component';

describe('ExpedienteAdminComponent', () => {
  let component: ExpedienteAdminComponent;
  let fixture: ComponentFixture<ExpedienteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
