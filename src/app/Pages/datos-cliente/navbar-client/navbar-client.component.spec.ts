import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClientComponent } from './navbar-client.component';

describe('NavbarClientComponent', () => {
  let component: NavbarClientComponent;
  let fixture: ComponentFixture<NavbarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
