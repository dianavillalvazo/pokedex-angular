import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { singlePokemonResponse } from '../types/types';

@Component({
  selector: 'pokemon-details-view',
  templateUrl: './pokemon-details-view.component.html',
  styleUrls: ['./pokemon-details-view.component.scss'],
})
export class PokemonDetailsViewComponent {
  public pokemon: singlePokemonResponse | undefined;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeapiService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiService
      .apiGetPokemonById(id)
      .subscribe((res) => (this.pokemon = res));
  }
}
