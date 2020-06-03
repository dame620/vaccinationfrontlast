import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactionComponent } from './addaction.component';

describe('AddactionComponent', () => {
  let component: AddactionComponent;
  let fixture: ComponentFixture<AddactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
