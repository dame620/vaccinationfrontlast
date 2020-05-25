import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgetroleComponent } from './showgetrole.component';

describe('ShowgetroleComponent', () => {
  let component: ShowgetroleComponent;
  let fixture: ComponentFixture<ShowgetroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgetroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgetroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
