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
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel ?:any;
    showYAxisLabel = true;
    yAxisLabel = 'Number';
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    onSelect(event: any) {
      console.log(event);
    }
    constructor(private trendsService:TrendsService){}
  ngOnInit(): void {
      this.changeTrend('skills');
      this.xAxisLabel = 'skills';
  }

  changeTrend(trend:String){
    this.trendsService.getTrendsCount(`${trend}`).subscribe((res:any)=>{
      console.log('trends are',res);
      this.xAxisLabel=trend;
      this.trends = res;
    })
  }

}
