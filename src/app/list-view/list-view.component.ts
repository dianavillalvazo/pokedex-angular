import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  pokemonsList: any;
  constructor(private _apiservice: PokeapiService) {}

  ngOnInit() {
    this._apiservice.apiListAllPokemons.subscribe(
      (res) => (this.pokemonsList = res.results)
    );
  }
}
