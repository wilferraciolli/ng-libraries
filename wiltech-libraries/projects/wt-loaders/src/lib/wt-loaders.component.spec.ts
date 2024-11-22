import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtLoadersComponent } from './wt-loaders.component';

describe('WtLoadersComponent', () => {
  let component: WtLoadersComponent;
  let fixture: ComponentFixture<WtLoadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtLoadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WtLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
