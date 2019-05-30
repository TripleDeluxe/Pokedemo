import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { PokemonIdService } from '../pokemon-id.service';
import { Pokemon } from '../pokemon';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon: Pokemon;
  imgElem: HTMLImageElement = document.getElementById('spriteimg') as HTMLImageElement;
  infoElem: HTMLElement = document.getElementById('container');

  constructor(
    private pokeApiService: PokeapiService,
    private pokemonIdService: PokemonIdService
  ) { }

  ngOnInit() {
    const pokeInfoComponent = this;
    

    this.pokemonIdService.getId().subscribe({
      next(id) {
        pokeInfoComponent.getPokemonInfo(id);

        //if (pokeInfoComponent.pokemon === undefined) {
        //  pokeInfoComponent.pokemon = new Pokemon();
        //  pokeInfoComponent.pokemon.id = 0;
        //  pokeInfoComponent.pokemon.name = "???";
        //  pokeInfoComponent.pokemon.stats = ["???", 0];
        //} else {
        //  console.log("sprite url : " + pokeInfoComponent.pokemon.sprites);
        //  console.log("id : " + pokeInfoComponent.pokemon.id);
        //  imgElem.src = pokeInfoComponent.pokemon.sprites;
        //}
        //return id;
      },
        error(msg) {
          return msg;
      }
    });
  }

  getPokemonInfo(id: string) {
    this.pokeApiService.getPokemonInfo(id).subscribe((data: Pokemon) => {
      
      this.pokemon = {
        id: data['id'],
        name: data['name'],
        stats: data['stats'],
        sprites: data['sprites'],
        weight: data['weight'],
        types: data['types']
      };
      this.infoElem.classList.remove("invisible");
    },
      error => {
        this.infoElem.classList.add("invisible");
    });  
  }
}
