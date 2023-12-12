import { Component, Input } from '@angular/core';
import { IData } from '../IData';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailItemComponent } from '../detail-item/detail-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, RouterLinkActive],
  templateUrl: './item.component.html',
  styleUrl: './item.component.less'
})
export class ItemComponent {
  @Input() myData!:IData
}
