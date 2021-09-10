import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentezComponent } from './sentez.component';

describe('SentezComponent', () => {
  let component: SentezComponent;
  let fixture: ComponentFixture<SentezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
