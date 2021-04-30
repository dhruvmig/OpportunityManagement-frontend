import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Opportunity} from '../../models/opportunity.model';
import { OpportunityService } from 'src/app/services/opportunity.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
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
    ed:['',Validators.required],
    skills:['',Validators.required],
    location:['',Validators.required],
    date:['',Validators.required],
    description:['',[Validators.required,Validators.minLength(10),Validators.maxLength(150)]],
    createdBy:['']
  })
  deleteOpportunity: any;
  editOpportunity: any;
  infoOpportunity: any;
  currentUser: any;
  logData:any;
  logSize: any;
  constructor(private opportunityService:OpportunityService,
    private fb: FormBuilder,
    private loginService:LoginService,
    private cookie:CookieService
          ) { }

  ngOnInit(): void {
     this.getOpportunity();
      this.currentUser = this.loginService.getCurrentUser();
     console.log('current usdr is ',this.currentUser)
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
       if(mode=='oppInfo')
       {
         console.log("opp info is ",opportunity);
        this.opportunityService.getLogData(opportunity.id).subscribe((res)=>{
          this.logData = res;
          this.logSize = this.logData.length;
          console.log("log data is ",this.logData,this.logData.length);
        })
         this.infoOpportunity = opportunity;
         button.setAttribute("data-target",'#infoOpportunityModal');
         console.log(button);
       }
        container!.appendChild(button);
        button.click();

  }
  getOpportunity(){
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
    // console.log('form data is ',this.opportunityForm);
    // this.opportunityForm.value.createdBy = this.loginService.getCurrentUser();
    
    this.opportunityService.addOpportunity (this.opportunityForm.value).subscribe((opportunity)=>{
        console.log("employe added successfully",opportunity);
        this.getOpportunity();
    },
    (err)=>{
      console.log("error to add opprotunity",err)
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log("filtervalue is ",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEdit(element:any){
    // console.log("edittting",this.opportunityForm.value,element)
    console.log('update on edit',this.opportunityForm.value);
    this.opportunityService.updateOpportunity (this.currentUser,element.id ,this.opportunityForm.value).subscribe((opportunity)=>{
      // console.log("employe added successfully",opportunity);
      this.getOpportunity();
  },
  (err)=>{
    console.log("error to add opprotunity")
  });
  }

  onDelete(element:any){
    // console.log("deleting",element);

    this.opportunityService.deleteOpportunity(element.id,this.currentUser).subscribe((element)=>{
      // console.log(element);
      this.getOpportunity();
    });
  }

  checkCanEdit(opportunity:Opportunity):Boolean
  {
     if(this.currentUser == this.opportunityService.checkAccess(opportunity.id))
     {
       return true;
     } 
     else{
       return false;
     }
  }

  findLogs(){
      console.log("infoOpportunity",this.infoOpportunity.id);
      this.cookie.set("OpportunityId",this.infoOpportunity.id);
  }
}
