import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsViewComponent } from './pokemon-details-view.component';

describe('PokemonDetailsViewComponent', () => {
  let component: PokemonDetailsViewComponent;
  let fixture: ComponentFixture<PokemonDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsViewComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
