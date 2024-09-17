import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotoFormComponent } from './edit-moto-form.component';

describe('EditMotoFormComponent', () => {
  let component: EditMotoFormComponent;
  let fixture: ComponentFixture<EditMotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMotoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
