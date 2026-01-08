import { Team } from './team.interface';

/**
 * Match-related interfaces and types
 */

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  score: MatchScore;
  duration: number; // in minutes
  status: MatchStatus;
  startTime: Date;
  endTime?: Date;
}

export interface MatchScore {
  team1Goals: number;
  team2Goals: number;
}

export enum MatchStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed'
}
