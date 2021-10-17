import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugador2Component } from './jugador2.component';

describe('Jugador2Component', () => {
  let component: Jugador2Component;
  let fixture: ComponentFixture<Jugador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jugador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
