import { Component, Input } from '@angular/core';
import { IData } from '../../IData';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.less'
})
export class ItemComponent {
  @Input() myData!:IData
}
