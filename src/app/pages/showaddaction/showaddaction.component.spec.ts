import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddactionComponent } from './showaddaction.component';

describe('ShowaddactionComponent', () => {
  let component: ShowaddactionComponent;
  let fixture: ComponentFixture<ShowaddactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
