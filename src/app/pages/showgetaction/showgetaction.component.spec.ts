import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgetactionComponent } from './showgetaction.component';

describe('ShowgetactionComponent', () => {
  let component: ShowgetactionComponent;
  let fixture: ComponentFixture<ShowgetactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgetactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgetactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
