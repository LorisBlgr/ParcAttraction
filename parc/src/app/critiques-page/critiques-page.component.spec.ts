import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritiquesPageComponent } from './critiques-page.component';

describe('CritiquesPageComponent', () => {
  let component: CritiquesPageComponent;
  let fixture: ComponentFixture<CritiquesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CritiquesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CritiquesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
