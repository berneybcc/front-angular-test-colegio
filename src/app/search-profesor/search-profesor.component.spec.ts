import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfesorComponent } from './search-profesor.component';

describe('SearchProfesorComponent', () => {
  let component: SearchProfesorComponent;
  let fixture: ComponentFixture<SearchProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
