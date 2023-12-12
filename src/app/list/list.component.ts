import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-data';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { DataMockService } from '../data-mock.service';
import { IData } from '../IData';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less'
})
export class ListComponent implements OnInit {
  dataList: IData[] = []

  constructor(private dataMockService:DataMockService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.getAll();
    //this.getCreatures();
    this.route.url
    .subscribe(res => {
      console.log(res);
      res.forEach(e => {
        if(e.path == 'monsters'){
          this.getMonsters();
        }
        else if(e.path == 'creatures'){
          this.getCreatures();
        }
      })
    });    
  }

  getAll(): void{
    this.dataMockService.getAll()
      .subscribe({
        next: (data) => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all data')
      });
  }

  getMonsters(): void{
    this.dataMockService.getMonsters()
      .subscribe({
        next: (data) => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all data')
      });
  }

  getCreatures(): void{
    this.dataMockService.getCreatures()
      .subscribe({
        next: (data) => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all data')
      });
  }
  
}
