import { Component, OnInit } from '@angular/core';
import { OpportunityService } from 'src/app/services/opportunity.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  rowData?:any;
  columnDefs =[
    {headerName: 'Id', field: 'id',filter:true },
		{headerName: 'Ed', field: 'ed',filter:true },
		{headerName: 'Skills', field: 'skills',filter:true},
    {headerName: 'Date', field: 'date' ,filter:true},
		{headerName: 'Location', field: 'location' ,filter:true},
		{headerName: '', field: ''}
  ];
  constructor(private oppService:OpportunityService) { }

  ngOnInit(): void {
    this.oppService.getOpportunity().subscribe((res)=>{
      console.log("reso",res);
      this.rowData = res;
    })
  }

}
