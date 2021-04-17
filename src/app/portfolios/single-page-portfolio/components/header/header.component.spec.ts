import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SinglePageFolioHeaderComponent } from './header.component';

describe('SinglePageFolioHeaderComponent', () => {
  let component: SinglePageFolioHeaderComponent;
  let fixture: ComponentFixture<SinglePageFolioHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePageFolioHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageFolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
