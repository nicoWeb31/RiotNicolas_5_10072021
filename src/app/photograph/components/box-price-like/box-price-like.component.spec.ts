import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPriceLikeComponent } from './box-price-like.component';

describe('BoxPriceLikeComponent', () => {
  let component: BoxPriceLikeComponent;
  let fixture: ComponentFixture<BoxPriceLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPriceLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPriceLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
