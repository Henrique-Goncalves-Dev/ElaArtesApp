import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSlide } from './item-slide';

describe('ItemSlide', () => {
  let component: ItemSlide;
  let fixture: ComponentFixture<ItemSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSlide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
