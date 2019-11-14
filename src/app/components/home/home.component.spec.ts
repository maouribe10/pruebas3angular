import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteTextComponent } from '../quote-text/quote-text.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent  
       ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
