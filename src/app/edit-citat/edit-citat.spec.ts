import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitat } from './edit-citat';

describe('EditCitat', () => {
  let component: EditCitat;
  let fixture: ComponentFixture<EditCitat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCitat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCitat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
