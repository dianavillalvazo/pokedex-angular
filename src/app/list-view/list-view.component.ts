import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { pokemon } from '../types/types';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  offset: number = 0;
  pokemonsList: pokemon[] = [];
  constructor(private _apiservice: PokeapiService) {}

  ngOnInit() {
    this.getPokemonsList();
  }

  onPageChange(isNext: boolean) {
    if (isNext) this.offset += 20;
    else this.offset -= 20;
    this.getPokemonsList();
  }

  getPokemonsList() {
    this._apiservice
      .apiListAllPokemons(this.offset)
      .subscribe((res) => (this.pokemonsList = res.results));
  }
}
