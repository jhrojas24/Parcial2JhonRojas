import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugador3Component } from './jugador3.component';

describe('Jugador3Component', () => {
  let component: Jugador3Component;
  let fixture: ComponentFixture<Jugador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jugador3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
