import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPhotographComponent } from './cart-photograph.component';

describe('CartPhotographComponent', () => {
  let component: CartPhotographComponent;
  let fixture: ComponentFixture<CartPhotographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPhotographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPhotographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
