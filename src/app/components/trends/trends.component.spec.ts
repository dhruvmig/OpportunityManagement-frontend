import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendsService } from 'src/app/services/trends.service';

import { TrendsComponent } from './trends.component';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ TrendsComponent ],
      providers:[TrendsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have Skills Tab',()=>{
    const btn = fixture.debugElement.nativeElement.querySelector('#Skills');
    expect(btn.innerHTML).toBe('Skills');
  })

  it('Should have Location Tab',()=>{
    const btn = fixture.debugElement.nativeElement.querySelector('#Location');
    expect(btn.innerHTML).toBe('Location');
  })

  it('Should have Ed Tab',()=>{
    const btn = fixture.debugElement.nativeElement.querySelector('#Ed');
    expect(btn.innerHTML).toBe('ED');
  })
});
