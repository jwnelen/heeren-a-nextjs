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
