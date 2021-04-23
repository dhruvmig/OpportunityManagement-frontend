import { Component, OnInit } from '@angular/core';
import { TrendsService } from 'src/app/services/trends.service';
import {Trends} from '../../models/trends.model';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

    trends ?: any[];
    
    constructor(private trendsService:TrendsService){}
  ngOnInit(): void {
      this.changeTrend('skills');
  }

  changeTrend(trend:String){
    this.trendsService.getTrendsCount(`${trend}`).subscribe((res:any)=>{
      console.log('trends are',res);
      this.trends = res;
    })
  }

}
