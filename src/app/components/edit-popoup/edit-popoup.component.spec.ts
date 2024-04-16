import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopoupComponent } from './edit-popoup.component';

describe('EditPopoupComponent', () => {
  let component: EditPopoupComponent;
  let fixture: ComponentFixture<EditPopoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPopoupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPopoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
