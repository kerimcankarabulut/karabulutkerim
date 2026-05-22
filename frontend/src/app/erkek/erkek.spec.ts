import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erkek } from './erkek';

describe('Erkek', () => {
  let component: Erkek;
  let fixture: ComponentFixture<Erkek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erkek],
    }).compileComponents();

    fixture = TestBed.createComponent(Erkek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
