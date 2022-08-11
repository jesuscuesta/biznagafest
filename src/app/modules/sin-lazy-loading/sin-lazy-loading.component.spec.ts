import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinLazyLoadingComponent } from './sin-lazy-loading.component';

describe('SinLazyLoadingComponent', () => {
  let component: SinLazyLoadingComponent;
  let fixture: ComponentFixture<SinLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinLazyLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
