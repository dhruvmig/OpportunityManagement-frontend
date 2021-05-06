import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';

import { LogsComponent } from './logs.component';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;
  let logsService  : LogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      declarations: [ LogsComponent ],
      providers:[LogsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LogsService] });
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Search Bar', () =>{
    const table= fixture.debugElement.query(By.css('input')).nativeElement;
    expect(table).toBeTruthy();
  });


  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });

 
  it('should Show Audit HIstory', () =>{
    const table= fixture.debugElement.query(By.css('#logInfoModal'));
    expect(table).toBeTruthy();
  });
});
