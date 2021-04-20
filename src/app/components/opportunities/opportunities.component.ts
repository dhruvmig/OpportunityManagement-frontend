import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Opportunity} from '../../models/opportunity.model';
import { OpportunityService } from 'src/app/services/opportunity.service';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OpportunitiesComponent implements OnInit {
  // dataSource = ELEMENT_DATA;
  dataSource?:any;
  data?:Opportunity[];
  columnsToDisplay = ['id','ed', 'skills', 'date', 'location',' '];
  expandedElement?: Opportunity | null;
  opportunityForm = this.fb.group({
    ed:[''],
    skills:[''],
    location:[''],
    date:['']
  })
  deleteOpportunity: any;
  editOpportunity: any;
  constructor(private opportunityService:OpportunityService,private fb: FormBuilder) { }

  ngOnInit(): void {
     this.getEmployee();
  }

  openDialog(opportunity:any,mode:string){
    
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle','modal');
        if(mode === 'add')
        {
          this.opportunityForm.reset();
          button.setAttribute('data-target','#addOpportunityModal');
        }
        if(mode === 'delete')
        {
          this.deleteOpportunity = opportunity;
          button.setAttribute('data-target','#deleteOpportunityModal');
        }
        if(mode === 'edit')
        {
          this.editOpportunity = opportunity;
          button.setAttribute('data-target','#editOpportunityModal');
        }
        container!.appendChild(button);
        button.click();

  }
  getEmployee(){
    this.opportunityService.getOpportunity().subscribe((response)=>{
      this.dataSource = response;
      console.log('in add',this.dataSource);
      this.dataSource = new MatTableDataSource(this.dataSource);
      // console.log("final",this.dataSource)

    },
    (error)=>{
      console.log("error to get opportunities",error);
    })
  }
  onSubmit(){
    // console.log('form data is ',this.opportunityForm.value);
    this.opportunityService.addOpportunity (this.opportunityForm.value).subscribe((opportunity)=>{
        // console.log("employe added successfully",opportunity);
        this.getEmployee();
    },
    (err)=>{
      console.log("error to add opprotunity")
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log("filtervalue is ",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEdit(element:any){
    // console.log("edittting",this.opportunityForm.value,element)
    this.opportunityService.updateOpportunity (element.id ,this.opportunityForm.value).subscribe((opportunity)=>{
      // console.log("employe added successfully",opportunity);
      this.getEmployee();
  },
  (err)=>{
    console.log("error to add opprotunity")
  });
  }

  onDelete(element:any){
    // console.log("deleting",element);

    this.opportunityService.deleteOpportunity(element.id).subscribe((element)=>{
      // console.log(element);
      this.getEmployee();
    });
  }
}
