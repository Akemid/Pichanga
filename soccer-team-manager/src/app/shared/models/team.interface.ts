import { Player, PlayerStatistics } from './player.interface';

/**
 * Team-related interfaces and types
 */

export interface Team {
  id: string;
  name: string;
  players: Player[];
  averageStatistics: PlayerStatistics;
  positionCoverage: PositionCoverage;
}

export interface PositionCoverage {
  goalkeeper: number;
  defender: number;
  midfielder: number;
  forward: number;
}
