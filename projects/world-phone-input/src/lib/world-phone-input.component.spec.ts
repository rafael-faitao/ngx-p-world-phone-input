import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPhoneInputComponent } from './world-phone-input.component';

describe('WorldPhoneInputComponent', () => {
  let component: WorldPhoneInputComponent;
  let fixture: ComponentFixture<WorldPhoneInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldPhoneInputComponent]
    });
    fixture = TestBed.createComponent(WorldPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
