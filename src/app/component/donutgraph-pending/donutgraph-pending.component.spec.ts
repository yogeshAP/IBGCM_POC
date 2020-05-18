import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutgraphPendingComponent } from './donutgraph-pending.component';

describe('DonutgraphPendingComponent', () => {
  let component: DonutgraphPendingComponent;
  let fixture: ComponentFixture<DonutgraphPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutgraphPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutgraphPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
