import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCataloguesComponent } from './list-catalogues.component';

describe('ListCataloguesComponent', () => {
  let component: ListCataloguesComponent;
  let fixture: ComponentFixture<ListCataloguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ ListCataloguesComponent ]
    })
    .compileComponents();
=======
      declarations: [ListCataloguesComponent],
    }).compileComponents();
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82

    fixture = TestBed.createComponent(ListCataloguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
