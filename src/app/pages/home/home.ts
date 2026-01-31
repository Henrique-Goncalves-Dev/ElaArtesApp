import { Component } from '@angular/core';
import {ItemSlide} from '../../components/item-slide/item-slide';

@Component({
  selector: 'app-home',
  imports: [
    ItemSlide
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {

}
