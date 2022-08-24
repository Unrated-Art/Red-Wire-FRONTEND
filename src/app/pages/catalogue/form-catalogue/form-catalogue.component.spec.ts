import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatalogueComponent } from './form-catalogue.component';

describe('FormCatalogueComponent', () => {
  let component: FormCatalogueComponent;
  let fixture: ComponentFixture<FormCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
