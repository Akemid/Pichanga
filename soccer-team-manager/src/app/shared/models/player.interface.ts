/**
 * Player-related interfaces and types
 */

export interface Player {
  id: string;
  name: string;
  statistics: PlayerStatistics;
  positions: Position[];
  isActive: boolean;
}

export interface PlayerStatistics {
  strength: number; // 1-10 scale
  speed: number; // 1-10 scale
  dribbling: number; // 1-10 scale
  age: number;
}

export enum Position {
  GOALKEEPER = 'portero',
  DEFENDER = 'defensa',
  MIDFIELDER = 'mediocampista',
  FORWARD = 'delantero'
}
