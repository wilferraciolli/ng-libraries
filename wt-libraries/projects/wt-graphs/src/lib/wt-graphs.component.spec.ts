import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtGraphsComponent } from './wt-graphs.component';

describe('WtGraphsComponent', () => {
  let component: WtGraphsComponent;
  let fixture: ComponentFixture<WtGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtGraphsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WtGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
