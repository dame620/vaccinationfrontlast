import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowadduserComponent } from './showadduser.component';

describe('ShowadduserComponent', () => {
  let component: ShowadduserComponent;
  let fixture: ComponentFixture<ShowadduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowadduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowadduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
