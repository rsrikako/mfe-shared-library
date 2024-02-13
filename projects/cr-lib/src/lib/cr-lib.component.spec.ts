import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrLibComponent } from './cr-lib.component';

describe('CrLibComponent', () => {
  let component: CrLibComponent;
  let fixture: ComponentFixture<CrLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
