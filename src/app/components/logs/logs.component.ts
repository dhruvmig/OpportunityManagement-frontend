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
  columnsToDisplay = ['logId','name','userId', 'action', 'opportunityId', 'dateTime',' '];
  oldValues?: any;
  newValues?: any;
  filterValues?:any;
  filterSelectObj ?:any;
  constructor(private logsService:LogsService) {
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
      this.logsService.getLogs().subscribe((res)=>{
          this.dataSource = res;
          console.log("res is ",res)
          this.dataSource = new MatTableDataSource(this.dataSource);
      //  this.dataSource.filterPredicate = this.createFilter();  
      //     console.log("datr is ",this.dataSource)
      //     this.filterSelectObj.filter((o:any) => {
      //       o.options = this.getFilterObject(this.dataSource, o.columnProp);
      //     });

        } );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setLog(element:any)
  {
    
    if(element.action=="Updated this Opportunity")
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
    else if(element.action == "Deleted this Opportunity")
    {
      let x = element.oldOpp;
      let a = x.indexOf(',');
      this.oldValues =x.substring(a+1); 
      a=this.oldValues.lastIndexOf(',');
      this.oldValues = this.oldValues.substring(0,a);
      this.newValues =" Opportunity Deleted" ;
    }
    else if(element.action == "Added new Opportunity"){
      this.oldValues ="Nothing yet";
      let x = element.newOpp;
      let a = x.indexOf(',');
      this.newValues =x.substring(a+1); 
      a=this.newValues.lastIndexOf(',');
      this.newValues = this.newValues.substring(0,a);
    }

    
  }


  // Testing new filter
// -------------------------------------------------------------------------------------------------------------------------------------------------

  // / Called on Filter change
  filterChange(filter:any, event:any) {
    //let filterValues = {},filte
    console.log("filter and change is ",(event.target as HTMLInputElement).value);
    // this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    // this.dataSource.filter = JSON.stringify(this.filterValues)
    this.filterValues = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValues.trim().toLowerCase();
    console.log("this data source filter i s",this.dataSource.filter,this.dataSource);
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word:any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value:any, key:any) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
  getFilterObject(fullObj:any, key:any) {
    console.log("full obs is ",fullObj);
    // const uniqChk = [];
    let uniqChk:any[]=[]
    fullObj.filter((obj:any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }
}




