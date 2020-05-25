import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenfantComponent } from './addenfant.component';

describe('AddenfantComponent', () => {
  let component: AddenfantComponent;
  let fixture: ComponentFixture<AddenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
