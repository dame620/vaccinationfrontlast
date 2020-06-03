import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoweditEnfantComponent } from './showedit-enfant.component';

describe('ShoweditEnfantComponent', () => {
  let component: ShoweditEnfantComponent;
  let fixture: ComponentFixture<ShoweditEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoweditEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoweditEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
