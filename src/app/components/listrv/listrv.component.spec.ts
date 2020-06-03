import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrvComponent } from './listrv.component';

describe('ListrvComponent', () => {
  let component: ListrvComponent;
  let fixture: ComponentFixture<ListrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
