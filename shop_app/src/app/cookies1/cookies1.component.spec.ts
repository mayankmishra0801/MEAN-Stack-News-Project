import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookies1Component } from './cookies1.component';

describe('Cookies1Component', () => {
  let component: Cookies1Component;
  let fixture: ComponentFixture<Cookies1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cookies1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cookies1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
