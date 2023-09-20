import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbrandsComponent } from './showbrands.component';

describe('ShowbrandsComponent', () => {
  let component: ShowbrandsComponent;
  let fixture: ComponentFixture<ShowbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
