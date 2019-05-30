export class Pokemon {
  //public static fromJson(json: Object): Pokemon {
  //  return new Pokemon(
  //    json['name'],
  //    json['id'],
  //    json['stats'],
  //    json['sprites.front_default']
  //  );
  //}

  //constructor(
  //  public name: string,
  //  public id: number,
  //  public stats: Array<[string, number]>,
  //  public sprite: string
  //  ) {
  //}
  id: number
  name: string
  types: {
    slot: number,
    type: {
      name: string,
      url: string
    }
  }[]
  weight: number
  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }[]
  sprites: {
    back_defaults?: string,
    back_female?: string,
    back_shiny?: string,
    back_shiny_female?: string,
    front_default: string,
    front_female?: string,
    front_shiny?: string,
    front_shiny_female?: string
  }
}
