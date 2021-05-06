import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';

import { OpportunitiesComponent } from './opportunities.component';

describe('OpportunitiesComponent', () => {
  let component: OpportunitiesComponent;
  let fixture: ComponentFixture<OpportunitiesComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule,ReactiveFormsModule,MatTableModule],
      declarations: [ OpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Filter Bar', () =>{
    const table= fixture.debugElement.query(By.css('#Filter')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should have a Add Opportunity Button', () =>{
    const table= fixture.debugElement.query(By.css('#addButton')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should Update Opportunity Modal ', () =>{
    const table= fixture.debugElement.query(By.css('#editOpportunityModal'));
    expect(table).toBeTruthy();
  });

  it('should Delete Opportunity Modal', () =>{
    const table= fixture.debugElement.query(By.css('#deleteOpportunityModal'));
    expect(table).toBeTruthy();
  });

  it('should Show Opportunity Info Modal', () =>{
    const table= fixture.debugElement.query(By.css('#infoOpportunityModal'));
    expect(table).toBeTruthy();
  });

  it('should Update Opportunity  ', () =>{
    const table= fixture.debugElement.query(By.css('#save'));
    expect(table).toBeTruthy();
  });

  it('should Delete Opportunity ', () =>{
    const table= fixture.debugElement.query(By.css('#Delete'));
    expect(table).toBeTruthy();
  });

  it('should Show Logs button', () =>{
    const table= fixture.debugElement.query(By.css('#modify'));
    expect(table).toBeTruthy();
  });
});
