import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlessonComponent } from './editlesson.component';

describe('EditlessonComponent', () => {
  let component: EditlessonComponent;
  let fixture: ComponentFixture<EditlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
