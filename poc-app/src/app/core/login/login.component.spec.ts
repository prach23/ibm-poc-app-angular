import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have a title "this is a test"`,async () => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.debugElement.componentInstance;
  //   expect(component.title).toEqual('this is a test');
  // })}
});
