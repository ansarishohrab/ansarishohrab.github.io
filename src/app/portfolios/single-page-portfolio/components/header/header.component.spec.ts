import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageFolioHeaderComponent } from './header.component';

describe('SinglePageFolioHeaderComponent', () => {
  let component: SinglePageFolioHeaderComponent;
  let fixture: ComponentFixture<SinglePageFolioHeaderComponent>;

  beforeEach(async(() => {
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
