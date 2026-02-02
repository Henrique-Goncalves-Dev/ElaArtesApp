import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-slide',
  imports: [],
  templateUrl: './item-slide.html',
  styleUrl: './item-slide.scss',
})
export class ItemSlide {

  @Input() title: string = 'Fotos';
  @Input() description: string = 'Itens de resina para colocar foto';
  @Input() imageUrl: string = 'assets/home-icon.svg';
  @Input() price: string = 'R$20,00';
}
