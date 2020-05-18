import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutgraphComponent } from './donutgraph.component';

describe('DonutgraphComponent', () => {
  let component: DonutgraphComponent;
  let fixture: ComponentFixture<DonutgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
