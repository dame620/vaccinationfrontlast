import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaddenfantComponent } from './getaddenfant.component';

describe('GetaddenfantComponent', () => {
  let component: GetaddenfantComponent;
  let fixture: ComponentFixture<GetaddenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetaddenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetaddenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
