import { Team } from './team.interface';
import { Match } from './match.interface';

/**
 * Tournament-related interfaces and types
 */

export interface Tournament {
  id: string;
  teams: Team[];
  matches: Match[];
  currentMatch?: Match;
  settings: TournamentSettings;
  status: TournamentStatus;
}

export interface TournamentSettings {
  matchDuration: number; // in minutes
  teamSize: number; // 4-8 players
  numberOfTeams: number; // 2-8 teams
}

export enum TournamentStatus {
  SETUP = 'setup',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed'
}
