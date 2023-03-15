export interface Player {
  id: number;
  name: string;
  nickname: string;
  singles_rating: number;
  doubles_rating: number;
  singles_rating_year: number;
  doubles_rating_year: number;
  created_at: Date;
  updated_at: Date;
}

export interface PlayerDict {
  [key: number]: Player;
}

export interface Dalton {
  id: number;
  reason: string;
  player_earned?: number;
  player_took: number;
  date_earned: Date;
  date_took?: Date;
  created_at: Date;
  updated_at: Date;
}
