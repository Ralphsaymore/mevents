import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProvidersComponent } from './local-providers.component';

describe('LocalProvidersComponent', () => {
  let component: LocalProvidersComponent;
  let fixture: ComponentFixture<LocalProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
