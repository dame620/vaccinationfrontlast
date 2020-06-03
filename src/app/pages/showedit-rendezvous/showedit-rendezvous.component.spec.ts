import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoweditRendezvousComponent } from './showedit-rendezvous.component';

describe('ShoweditRendezvousComponent', () => {
  let component: ShoweditRendezvousComponent;
  let fixture: ComponentFixture<ShoweditRendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoweditRendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoweditRendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
