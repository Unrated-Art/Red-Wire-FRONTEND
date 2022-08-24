import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
      declarations: [ContentComponent],
    }).compileComponents();
=======
      declarations: [ ContentComponent ]
    })
    .compileComponents();
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82
=======
      declarations: [ ContentComponent ]
    })
    .compileComponents();
>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
