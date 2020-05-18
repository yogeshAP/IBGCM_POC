import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutgraphPriorityComponent } from './donutgraph-priority.component';

describe('DonutgraphPriorityComponent', () => {
  let component: DonutgraphPriorityComponent;
  let fixture: ComponentFixture<DonutgraphPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutgraphPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutgraphPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
