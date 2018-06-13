import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceObjectComponent } from './service-object.component';

describe('ServiceObjectComponent', () => {
  let component: ServiceObjectComponent;
  let fixture: ComponentFixture<ServiceObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
