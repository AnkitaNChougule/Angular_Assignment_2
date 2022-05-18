import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedScreenComponent } from './unauthorized-screen.component';

describe('UnauthorizedScreenComponent', () => {
  let component: UnauthorizedScreenComponent;
  let fixture: ComponentFixture<UnauthorizedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
