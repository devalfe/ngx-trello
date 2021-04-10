import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { of as observableOf, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public readonly cards: Card[] = [
    {
      id: '1',
      name: 'Todo'
    },
    {
      id: '2',
      name: 'Todo'
    },
    {
      id: '3',
      name: 'Todos'
    }
  ];
  constructor() {}

  listBoards(): Observable<Card[]> {
    return observableOf(this.cards);
  }
}
