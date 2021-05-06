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

  // it('should has correct rows', () => {
  //   fixture.detectChanges();
  //   // query debug elements doesn't work
  //   const rowDebugElements = de.queryAll(By.css('tbody tr'));
  //   expect(rowDebugElements.length).toBe(0);
  //   // has to fallback to query DOM elements
  //   const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
  //   expect(rowHtmlElements.length).toBe(10);
  // });
});
