import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgettypeComponent } from './showgettype.component';

describe('ShowgettypeComponent', () => {
  let component: ShowgettypeComponent;
  let fixture: ComponentFixture<ShowgettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
