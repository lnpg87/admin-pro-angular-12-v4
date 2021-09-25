import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserRxjsServiceService } from './user-rxjs-service.service';
import { UserRxjsComponent } from './user-rxjs.component';

describe('UserRxjsComponent', () => {
  let component: UserRxjsComponent;
  let fixture: ComponentFixture<UserRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRxjsComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [UserRxjsServiceService, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
