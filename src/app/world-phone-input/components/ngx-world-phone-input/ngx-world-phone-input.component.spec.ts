import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxWorldPhoneInputComponent } from './ngx-world-phone-input.component';


describe('PhoneInputComponent', () => {
  let component: NgxWorldPhoneInputComponent;
  let fixture: ComponentFixture<NgxWorldPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWorldPhoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWorldPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
