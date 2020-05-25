import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetenfantComponent } from './getenfant.component';

describe('GetenfantComponent', () => {
  let component: GetenfantComponent;
  let fixture: ComponentFixture<GetenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
