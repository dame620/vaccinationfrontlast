import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgetenfantComponent } from './showgetenfant.component';

describe('ShowgetenfantComponent', () => {
  let component: ShowgetenfantComponent;
  let fixture: ComponentFixture<ShowgetenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgetenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgetenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
