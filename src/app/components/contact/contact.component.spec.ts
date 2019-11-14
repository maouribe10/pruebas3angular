import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents()
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });






  












/*

  it(`boton no clickeado`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    let element: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }))



  it(`boton cliqueado`, async(() => {
    fixture.detectChanges();
    component.contact.email = 'f@ceiba.com.co';
    component.contact.name = 'holas';
    component.contact.text = 'fdfff';
    component.createForm();
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    let element: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);

  }));*/
});
