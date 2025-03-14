import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosAdminComponent } from './movimientos-admin.component';

describe('MovimientosAdminComponent', () => {
  let component: MovimientosAdminComponent;
  let fixture: ComponentFixture<MovimientosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimientosAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
