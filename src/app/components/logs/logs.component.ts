import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  dataSource?: any;
  columnsToDisplay = ['logId','name','userId', 'action', 'opportunityId', 'dateTime',' '];
  oldValues?: any;
  newValues?: any;
  filterValues?:any;
  filterSelectObj ?:any;
  tempFilterValue?:any;
  constructor(private logsService:LogsService,private cookie:CookieService) {
    this.filterSelectObj = [{
      name: 'logId',
        columnProp: 'logId',
        options: []
    },{
      name: 'User Id',
        columnProp: 'userId',
        options: []
    },{
      name: 'Action',
        columnProp: 'action',
        options: []
    },{
      name: 'Opportunity Id',
        columnProp: 'opportunityId',
        options: []
    }
  ]
   }

  ngOnInit(): void {
      this.getAllLogs();
  }

  getAllLogs(){
    this.logsService.getLogs().subscribe((res)=>{
      this.dataSource = res;
      console.log("res is ",res)
      this.dataSource = new MatTableDataSource(this.dataSource);
      if(this.cookie.get("OpportunityId")!=null)
      {
        this.tempFilterValue = this.cookie.get("OpportunityId");
        this.dataSource.filter = this.tempFilterValue.trim().toLowerCase();
        this.cookie.set("OpportunityId","");
      }
    });
  }
  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setLog(element:any)
  {
    console.log("elementi sidfjlsidjf",element)
    
    if(element.action=="Updated ")
    {
      let x = element.oldOpp;
      let y = element.newOpp;
      let a = x.indexOf(',');
      let b = y.indexOf(',');
      // x = this.oldValues.substring(0,x.length-16);
      // y = this.newValues.substring(0,y.length-16);
      this.newValues=y.substring(b+1);
      this.oldValues =x.substring(a+1); 
      a=this.oldValues.lastIndexOf(',');
      b= this.newValues.lastIndexOf(',');
      
      this.newValues = this.newValues.substring(0,b);
      this.oldValues = this.oldValues.substring(0,a);
      console.log("required log is ",element);
    }
    else if(element.action == "Deleted")
    {
      let x = element.oldOpp;
      let a = x.indexOf(',');
      this.oldValues =x.substring(a+1); 
      a=this.oldValues.lastIndexOf(',');
      this.oldValues = this.oldValues.substring(0,a);
      this.newValues =" Opportunity Deleted" ;
    }
    else if(element.action == "Added "){
      this.oldValues ="Nothing yet";
      let x = element.newOpp;
      let a = x.indexOf(',');
      this.newValues =x.substring(a+1); 
      a=this.newValues.lastIndexOf(',');
      this.newValues = this.newValues.substring(0,a);
    }

    
  }
}




