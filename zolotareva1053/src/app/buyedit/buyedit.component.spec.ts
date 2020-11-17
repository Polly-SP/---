import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyeditComponent } from './buyedit.component';

describe('BuyeditComponent', () => {
  let component: BuyeditComponent;
  let fixture: ComponentFixture<BuyeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
