import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreencherLivroComponent } from './preencher-livro.component';

describe('PreencherLivroComponent', () => {
  let component: PreencherLivroComponent;
  let fixture: ComponentFixture<PreencherLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreencherLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreencherLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
