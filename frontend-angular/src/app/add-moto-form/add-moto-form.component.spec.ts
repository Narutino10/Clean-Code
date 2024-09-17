import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotoFormComponent } from './add-moto-form.component';

describe('AddMotoFormComponent', () => {
  let component: AddMotoFormComponent;
  let fixture: ComponentFixture<AddMotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMotoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
