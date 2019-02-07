import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplayersComponent } from './createplayers.component';

describe('CreateplayersComponent', () => {
  let component: CreateplayersComponent;
  let fixture: ComponentFixture<CreateplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
