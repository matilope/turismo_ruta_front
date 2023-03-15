import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionesComponent } from './excursiones.component';

describe('ExcursionesComponent', () => {
  let component: ExcursionesComponent;
  let fixture: ComponentFixture<ExcursionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
