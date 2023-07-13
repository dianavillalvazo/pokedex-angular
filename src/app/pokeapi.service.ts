import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  pokemon,
  pokemonListResponse,
  singlePokemonResponse,
} from './types/types';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  apiListAllPokemons(offset: number): Observable<pokemonListResponse> {
    return this.http
      .get<pokemonListResponse>(this.url, {
        params: {
          offset,
        },
      })
      .pipe(
        tap((res) => {
          res.results.map((resPokemons: pokemon) => {
            this.apiGetPokemon(resPokemons.url).subscribe(
              (res) => (resPokemons.details = res)
            );
          });
        })
      );
  }

  private apiGetPokemon(url: string): Observable<singlePokemonResponse> {
    return this.http.get<singlePokemonResponse>(url).pipe(map((res) => res));
  }

  public apiGetPokemonById(id: string): Observable<singlePokemonResponse> {
    const url = `${this.url}/${id}`;
    return this.http.get<singlePokemonResponse>(url).pipe(map((res) => res));
  }
}
