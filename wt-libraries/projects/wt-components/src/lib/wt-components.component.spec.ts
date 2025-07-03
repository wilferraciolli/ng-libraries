import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtComponentsComponent } from './wt-components.component';

describe('WtComponentsComponent', () => {
  let component: WtComponentsComponent;
  let fixture: ComponentFixture<WtComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtComponentsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WtComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
