import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEntryComponent } from './multiple-entry.component';

describe('MultipleEntryComponent', () => {
  let component: MultipleEntryComponent;
  let fixture: ComponentFixture<MultipleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
