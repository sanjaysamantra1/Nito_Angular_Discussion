import { Component, input } from '@angular/core';

@Component({
  selector: 'smartAssist-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css',
  inputs: ['categoryObj']
})
export class CategoryItem {
  categoryObj: any;
}
