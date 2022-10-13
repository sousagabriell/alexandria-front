import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLivroComponent } from './tipo-livro.component';

describe('TipoLivroComponent', () => {
  let component: TipoLivroComponent;
  let fixture: ComponentFixture<TipoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
