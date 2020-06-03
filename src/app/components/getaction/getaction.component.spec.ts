import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetactionComponent } from './getaction.component';

describe('GetactionComponent', () => {
  let component: GetactionComponent;
  let fixture: ComponentFixture<GetactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
