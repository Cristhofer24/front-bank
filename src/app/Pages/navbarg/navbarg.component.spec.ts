import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbargComponent } from './navbarg.component';

describe('NavbargComponent', () => {
  let component: NavbargComponent;
  let fixture: ComponentFixture<NavbargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbargComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
