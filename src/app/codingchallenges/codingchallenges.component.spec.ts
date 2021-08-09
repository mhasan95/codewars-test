import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingchallengesComponent } from './codingchallenges.component';

describe('CodingchallengesComponent', () => {
  let component: CodingchallengesComponent;
  let fixture: ComponentFixture<CodingchallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingchallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingchallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
