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
      name: 'Todo',
      lists: [
        {
          id: '1',
          title: 'Add social networks',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '7',
                firstName: 'Lee',
                lastName: 'Wong',
                avatar: 'url',
                email: 'Lee@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '8',
                firstName: 'Alan',
                lastName: 'Thompson',
                avatar: 'url',
                email: 'Alan@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '9',
                firstName: 'Kate',
                lastName: 'Martinez',
                avatar: 'url',
                email: 'Kate@email.com'
              }
            }
          ]
        },
        {
          id: '2',
          title: 'What are you lookin for',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '1',
                firstName: 'Felix',
                lastName: 'Franco',
                avatar: 'url',
                email: 'felix@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '2',
                firstName: 'Edu',
                lastName: 'Taco',
                avatar: 'url',
                email: 'Edu@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '3',
                firstName: 'Lila',
                lastName: 'Azul',
                avatar: 'url',
                email: 'Lila@email.com'
              }
            }
          ]
        },
        {
          id: '3',
          title: 'You still here, leave!!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '4',
                firstName: 'Luna',
                lastName: 'Mike',
                avatar: 'url',
                email: 'Luna@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '5',
                firstName: 'Eva',
                lastName: 'Moor',
                avatar: 'url',
                email: 'Eva@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '6',
                firstName: 'Jack',
                lastName: 'Williams',
                avatar: 'url',
                email: 'Jack@email.com'
              }
            }
          ]
        },
        {
          id: '4',
          title: 'You ssssssd still here, leave',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '7',
                firstName: 'Lee',
                lastName: 'Wong',
                avatar: 'url',
                email: 'Lee@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '8',
                firstName: 'Alan',
                lastName: 'Thompson',
                avatar: 'url',
                email: 'Alan@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '9',
                firstName: 'Kate',
                lastName: 'Martinez',
                avatar: 'url',
                email: 'Kate@email.com'
              }
            }
          ]
        },
        {
          id: '5',
          title: 'You sd still here, leave!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '1',
                firstName: 'Felix',
                lastName: 'Franco',
                avatar: 'url',
                email: 'felix@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '2',
                firstName: 'Edu',
                lastName: 'Taco',
                avatar: 'url',
                email: 'Edu@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '3',
                firstName: 'Lila',
                lastName: 'Azul',
                avatar: 'url'
              }
            }
          ]
        },
        {
          id: '6',
          title: 'lore You still here, leave!!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '4',
                firstName: 'Luna',
                lastName: 'Mike',
                avatar: 'url',
                email: 'Luna@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '5',
                firstName: 'Eva',
                lastName: 'Moor',
                avatar: 'url',
                email: 'Eva@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '6',
                firstName: 'Jack',
                lastName: 'Williams',
                avatar: 'url',
                email: 'Jack@email.com'
              }
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Todo',
      lists: [
        {
          id: '2',
          title: 'What are you lookin for',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '1',
                firstName: 'Felix',
                lastName: 'Franco',
                avatar: 'url',
                email: 'felix@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '2',
                firstName: 'Edu',
                lastName: 'Taco',
                avatar: 'url',
                email: 'Edu@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '3',
                firstName: 'Lila',
                lastName: 'Azul',
                avatar: 'url',
                email: 'Lila@email.com'
              }
            }
          ]
        },
        {
          id: '3',
          title: 'You still here, leave!!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '4',
                firstName: 'Luna',
                lastName: 'Mike',
                avatar: 'url',
                email: 'Luna@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '5',
                firstName: 'Eva',
                lastName: 'Moor',
                avatar: 'url',
                email: 'Eva@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '6',
                firstName: 'Jack',
                lastName: 'Williams',
                avatar: 'url',
                email: 'Jack@email.com'
              }
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Todos',
      lists: [
        {
          id: '4',
          title: 'You ssssssd still here, leave',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '7',
                firstName: 'Lee',
                lastName: 'Wong',
                avatar: 'url',
                email: 'Lee@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '8',
                firstName: 'Alan',
                lastName: 'Thompson',
                avatar: 'url',
                email: 'Alan@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '9',
                firstName: 'Kate',
                lastName: 'Martinez',
                avatar: 'url',
                email: 'Kate@email.com'
              }
            }
          ]
        },
        {
          id: '5',
          title: 'You sd still here, leave!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '1',
                firstName: 'Felix',
                lastName: 'Franco',
                avatar: 'url',
                email: 'felix@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '2',
                firstName: 'Edu',
                lastName: 'Taco',
                avatar: 'url',
                email: 'Edu@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '3',
                firstName: 'Lila',
                lastName: 'Azul',
                avatar: 'url'
              }
            }
          ]
        },
        {
          id: '6',
          title: 'lore You still here, leave!!',
          description: '',
          labels: [{ name: 'Home' }, { name: 'Hacer' }, { name: 'Now' }],
          comments: [
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '4',
                firstName: 'Luna',
                lastName: 'Mike',
                avatar: 'url',
                email: 'Luna@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '5',
                firstName: 'Eva',
                lastName: 'Moor',
                avatar: 'url',
                email: 'Eva@email.com'
              }
            },
            {
              comment: 'Lorem Ipsum simply dummy text',
              collaborators: {
                uid: '6',
                firstName: 'Jack',
                lastName: 'Williams',
                avatar: 'url',
                email: 'Jack@email.com'
              }
            }
          ]
        }
      ]
    }
  ];
  constructor() {}

  listBoards(): Observable<Card[]> {
    return observableOf(this.cards);
  }
}
