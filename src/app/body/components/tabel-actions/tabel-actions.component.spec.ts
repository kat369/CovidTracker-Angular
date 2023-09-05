import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelActionsComponent } from './tabel-actions.component';

describe('TabelActionsComponent', () => {
  let component: TabelActionsComponent;
  let fixture: ComponentFixture<TabelActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelActionsComponent]
    });
    fixture = TestBed.createComponent(TabelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
