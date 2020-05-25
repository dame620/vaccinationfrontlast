import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettypeComponent } from './gettype.component';

describe('GettypeComponent', () => {
  let component: GettypeComponent;
  let fixture: ComponentFixture<GettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
