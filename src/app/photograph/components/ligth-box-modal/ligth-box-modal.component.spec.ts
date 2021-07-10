import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigthBoxModalComponent } from './ligth-box-modal.component';

describe('LigthBoxModalComponent', () => {
  let component: LigthBoxModalComponent;
  let fixture: ComponentFixture<LigthBoxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigthBoxModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigthBoxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
