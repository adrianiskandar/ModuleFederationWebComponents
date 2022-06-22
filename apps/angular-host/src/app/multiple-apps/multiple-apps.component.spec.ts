import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAppsComponent } from './multiple-apps.component';

describe('MultipleAppsComponent', () => {
  let component: MultipleAppsComponent;
  let fixture: ComponentFixture<MultipleAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleAppsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
