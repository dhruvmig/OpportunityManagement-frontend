import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  dataSource?: any;
  columnsToDisplay = ['logId','userId', 'action', 'opportunityId', 'dateTime'];
  constructor(private logsService:LogsService) { }

  ngOnInit(): void {
      this.logsService.getLogs().subscribe((res)=>{
          this.dataSource = res;
          console.log("res is ",res)
          this.dataSource = new MatTableDataSource(this.dataSource);
          console.log("datr is ",this.dataSource)
      } );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log("filtervalue is ",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
