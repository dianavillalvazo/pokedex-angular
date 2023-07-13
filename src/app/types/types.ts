interface attribute {
  name: string;
  url: string;
}

export interface pokemon extends attribute {
  details: singlePokemonResponse;
}

export interface pokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: pokemon[];
}

export interface singlePokemonResponse {
  abilities: ability[];
  base_experience: number;
  forms: attribute[];
  game_indices: game_index[];
  height: number;
  held_items: item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: move[];
  name: string;
  order: number;
  past_types: [];
  species: attribute;
  sprites: sprites;
  stats: stat[];
  types: type[];
  weight: number;
}

interface ability {
  ability: attribute;
  is_hidden: boolean;
  slot: number;
}

interface game_index {
  game_index: number;
  version: attribute[];
}

interface item {
  item: attribute;
  version_details: version_details[];
}

interface version_details {
  rarity: number;
  version: attribute;
}

interface move {
  move: attribute;
  version_group_details: version_group_details[];
}

interface version_group_details {
  level_learned_at: number;
  move_learn_method: attribute;
  version_group: attribute;
}

interface stat {
  base_stat: number;
  stat: attribute;
}

interface type {
  slot: number;
  type: attribute;
}

interface sprites {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
}
