import { Component } from '@angular/core';
import { DATA } from '../../mock-data';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less'
})
export class ListComponent {
  datalist = DATA
}
