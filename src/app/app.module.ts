import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './pokeapi.service';
import { PokemonIdService } from './pokemon-id.service';

import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PokemonInfoComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PokeapiService, PokemonIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
