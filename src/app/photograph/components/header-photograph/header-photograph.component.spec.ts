import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPhotographComponent } from './header-photograph.component';

describe('HeaderPhotographComponent', () => {
  let component: HeaderPhotographComponent;
  let fixture: ComponentFixture<HeaderPhotographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPhotographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPhotographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
