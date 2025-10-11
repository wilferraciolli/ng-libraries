import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtWebsockets } from './wt-websockets';

describe('WtWebsockets', () => {
  let component: WtWebsockets;
  let fixture: ComponentFixture<WtWebsockets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtWebsockets]
    }).compileComponents();

    fixture = TestBed.createComponent(WtWebsockets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
