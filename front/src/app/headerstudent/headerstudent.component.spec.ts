import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderstudentComponent } from './headerstudent.component';

describe('HeaderstudentComponent', () => {
  let component: HeaderstudentComponent;
  let fixture: ComponentFixture<HeaderstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
