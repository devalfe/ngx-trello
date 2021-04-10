import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Collaborators } from '../model/collaborators';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  public readonly collaborators: Collaborators[] = [
    {
      uid: '1',
      firstName: 'Felix',
      lastName: 'Franco',
      avatar: 'url',
      email: 'felix@email.com'
    },
    {
      uid: '2',
      firstName: 'Edu',
      lastName: 'Taco',
      avatar: 'url',
      email: 'Edu@email.com'
    },
    {
      uid: '3',
      firstName: 'Lila',
      lastName: 'Azul',
      avatar: 'url',
      email: 'Lila@email.com'
    },
    {
      uid: '4',
      firstName: 'Luna',
      lastName: 'Mike',
      avatar: 'url',
      email: 'Luna@email.com'
    },
    {
      uid: '5',
      firstName: 'Eva',
      lastName: 'Moor',
      avatar: 'url',
      email: 'Eva@email.com'
    },
    {
      uid: '6',
      firstName: 'Jack',
      lastName: 'Williams',
      avatar: 'url',
      email: 'Jack@email.com'
    },
    {
      uid: '7',
      firstName: 'Lee',
      lastName: 'Wong',
      avatar: 'url',
      email: 'Lee@email.com'
    },
    {
      uid: '8',
      firstName: 'Alan',
      lastName: 'Thompson',
      avatar: 'url',
      email: 'Alan@email.com'
    },
    {
      uid: '9',
      firstName: 'Kate',
      lastName: 'Martinez',
      avatar: 'url',
      email: 'Kate@email.com'
    }
  ];
  constructor() {}

  listBoards(): Observable<Collaborators[]> {
    return observableOf(this.collaborators);
  }
}
