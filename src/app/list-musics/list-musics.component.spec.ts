import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicsComponent } from './list-musics.component';

describe('ListMusicsComponent', () => {
  let component: ListMusicsComponent;
  let fixture: ComponentFixture<ListMusicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMusicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
