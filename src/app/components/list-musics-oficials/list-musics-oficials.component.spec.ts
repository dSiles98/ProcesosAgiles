import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicsOficialsComponent } from './list-musics-oficials.component';

describe('ListMusicsOficialsComponent', () => {
  let component: ListMusicsOficialsComponent;
  let fixture: ComponentFixture<ListMusicsOficialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMusicsOficialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicsOficialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
