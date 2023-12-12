import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../IData';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataMockService } from '../data-mock.service';

@Component({
  selector: 'app-detail-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-item.component.html',
  styleUrl: './detail-item.component.less'
})
export class DetailItemComponent implements OnInit{
  
  constructor(private route: ActivatedRoute, private dataMockService: DataMockService) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(res => {
      console.log(res); 
      const id = res.get("id");
      if (id != null) {
        this.dataMockService.getById(+id) 
        .subscribe(res => {
          this.entry = res;
        }) 
      }
      })
  }

  @Input() entry!:IData
}
