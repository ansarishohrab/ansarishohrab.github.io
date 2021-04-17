import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SinglePagePorfolioDashboardComponent } from './dashboard.component';

describe('SinglePagePorfolioDashboardComponent', () => {
  let component: SinglePagePorfolioDashboardComponent;
  let fixture: ComponentFixture<SinglePagePorfolioDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePagePorfolioDashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePagePorfolioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
