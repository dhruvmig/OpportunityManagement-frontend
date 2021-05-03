import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';

import { LogsComponent } from './logs.component';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;
  let logsService  : LogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ LogsComponent ],
      providers:[LogsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // logsService = TestBed.get(LogsService);
    TestBed.configureTestingModule({ providers: [LogsService] });
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call getLogs method and return no data',()=>{
    spyOn(logsService, 'getLogs').and.returnValue( of ([]));
    let data = component.getAllLogs();
    console.log('test data is ',data);
    expect(logsService.getLogs()).toHaveBeenCalled();
    expect(component.dataSource).toEqual([]);
  })
});
