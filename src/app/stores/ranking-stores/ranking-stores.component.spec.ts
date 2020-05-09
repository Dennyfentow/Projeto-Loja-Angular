import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingStoresComponent } from './ranking-stores.component';

describe('RankingStoresComponent', () => {
  let component: RankingStoresComponent;
  let fixture: ComponentFixture<RankingStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
