import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from 'src/app/pokemon';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  constructor(private http: HttpClient) { }

  pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  counter: string = "0";
  //tableau qui contient toutes les listes de 20 par 20 pokemons renvoyées par l'API
  pokemonList: Observable<PokemonList>;

  getPokemonList() {
    this.pokemonList = this.http.get<PokemonList>(this.pokemonURL + "?limit=964");
    
    return this.pokemonList;
    //return this.http.get<PokemonList>(this.pokemonURL);
  }

  getPokemonInfo(id: string) {
    return this.http.get<Pokemon>(this.pokemonURL + id);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Array<[string, string]>;
}
