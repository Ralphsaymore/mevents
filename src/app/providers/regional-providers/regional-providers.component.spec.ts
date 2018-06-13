import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalProvidersComponent } from './regional-providers.component';

describe('RegionalProvidersComponent', () => {
  let component: RegionalProvidersComponent;
  let fixture: ComponentFixture<RegionalProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
