import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'pokemon-details-view',
  templateUrl: './pokemon-details-view.component.html',
  styleUrls: ['./pokemon-details-view.component.scss'],
})
export class PokemonDetailsViewComponent {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeapiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiService
      .apiGetPokemon(`${this.urlPokemon}/${id}`)
      .subscribe((res) => (this.pokemon = res));
  }
}
