import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependency } from './dependency';

describe('Dependency', () => {
  let component: Dependency;
  let fixture: ComponentFixture<Dependency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dependency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dependency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
