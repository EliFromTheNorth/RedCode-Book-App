import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Citat } from './citat';

describe('Citat', () => {
  let component: Citat;
  let fixture: ComponentFixture<Citat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Citat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Citat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
