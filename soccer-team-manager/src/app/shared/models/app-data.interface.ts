import { Player } from './player.interface';
import { Tournament } from './tournament.interface';

/**
 * Application data and settings interfaces
 */

export interface AppData {
  players: Player[];
  tournaments: Tournament[];
  settings: AppSettings;
  version: string;
}

export interface AppSettings {
  defaultMatchDuration: number;
  defaultTeamSize: number;
  theme: 'light' | 'dark';
  locale: 'es-PE'; // Peruvian Spanish
}
