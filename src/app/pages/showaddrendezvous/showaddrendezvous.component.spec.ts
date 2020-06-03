import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddrendezvousComponent } from './showaddrendezvous.component';

describe('ShowaddrendezvousComponent', () => {
  let component: ShowaddrendezvousComponent;
  let fixture: ComponentFixture<ShowaddrendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddrendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
