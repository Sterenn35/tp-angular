import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.less'
})
export class SearchComponent {

}
