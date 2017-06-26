import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAMGridComponent } from './camgrid.component';

describe('CAMGridComponent', () => {
  let component: CAMGridComponent;
  let fixture: ComponentFixture<CAMGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAMGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAMGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
