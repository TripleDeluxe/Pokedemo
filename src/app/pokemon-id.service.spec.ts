import { TestBed } from '@angular/core/testing';

import { PokemonIdService } from './pokemon-id.service';

describe('PokemonIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonIdService = TestBed.get(PokemonIdService);
    expect(service).toBeTruthy();
  });
});
