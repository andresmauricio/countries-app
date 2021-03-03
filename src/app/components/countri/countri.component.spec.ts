import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriComponent } from './countri.component';

describe('CountriComponent', () => {
  let component: CountriComponent;
  let fixture: ComponentFixture<CountriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
