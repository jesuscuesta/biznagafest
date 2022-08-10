import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroIframeComponent } from './micro-iframe.component';

describe('MicroIframeComponent', () => {
  let component: MicroIframeComponent;
  let fixture: ComponentFixture<MicroIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroIframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
