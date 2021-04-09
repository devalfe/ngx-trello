import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Board } from '../model/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public readonly boards: Board[] = [
    { id: '1', boardName: 'Todo for today' },
    { id: '2', boardName: 'Todo for today' },
    { id: '3', boardName: 'Todo for today' }
  ];
  constructor() {}

  listBoards(): Observable<Board[]> {
    return observableOf(this.boards);
  }
}
