import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitat } from './add-citat';

describe('AddCitat', () => {
  let component: AddCitat;
  let fixture: ComponentFixture<AddCitat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCitat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCitat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
