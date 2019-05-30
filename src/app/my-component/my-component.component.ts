import { Component, OnInit } from '@angular/core';
import { PokeapiService, PokemonList } from '../pokeapi.service';
import { PokemonIdService } from '../pokemon-id.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title: string = "pokedemo";
  id: string = "";
  //Liste de toutes les listes de 20 pokemons renvoyées par l'API
  pokemonList: Array<[string, string]>;
  pokemonCount: number;
  pokemonInfo: Pokemon;

  constructor(
    private pokeApiService: PokeapiService,
    private pokemonIdService: PokemonIdService
  ) { }

  ngOnInit() {
    this.getPokemonList();
    this.pokemonIdService.setId(this.id);
    
  }

  getPokemonList() {
    this.pokeApiService.getPokemonList().forEach((elem) => {
      this.pokemonList = elem.results;
      this.pokemonCount = elem.count;
      //elem.subscribe((data: PokemonList) => this.pokemonList.push({
      //  count: data['count'],
      //  next: data['next'],
      //  previous: data['previous'],
      //  results: data['results']
      //}));
    });
  }

  setId() {
    this.pokemonIdService.setId(this.id);
  }
}
