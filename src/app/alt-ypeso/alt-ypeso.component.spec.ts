import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltYpesoComponent } from './alt-ypeso.component';

describe('AltYpesoComponent', () => {
  let component: AltYpesoComponent;
  let fixture: ComponentFixture<AltYpesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltYpesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltYpesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
