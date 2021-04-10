import { Card } from './card';
import { Collaborators } from './collaborators';
export class Board {
  id: string;
  boardName: string;
  collaborators: Collaborators[];
  cards: Card[];
}
