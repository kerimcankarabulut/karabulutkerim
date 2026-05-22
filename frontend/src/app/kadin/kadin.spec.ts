import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kadin } from './kadin';

describe('Kadin', () => {
  let component: Kadin;
  let fixture: ComponentFixture<Kadin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kadin],
    }).compileComponents();

    fixture = TestBed.createComponent(Kadin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
