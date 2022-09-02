import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgumonComponent } from './agumon.component';

describe('AgumonComponent', () => {
  let component: AgumonComponent;
  let fixture: ComponentFixture<AgumonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgumonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgumonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
