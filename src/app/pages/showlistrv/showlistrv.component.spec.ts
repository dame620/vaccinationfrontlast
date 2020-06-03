import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistrvComponent } from './showlistrv.component';

describe('ShowlistrvComponent', () => {
  let component: ShowlistrvComponent;
  let fixture: ComponentFixture<ShowlistrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlistrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlistrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
