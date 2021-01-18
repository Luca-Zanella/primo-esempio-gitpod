import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggComponent } from './agg.component';

describe('AggComponent', () => {
  let component: AggComponent;
  let fixture: ComponentFixture<AggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
