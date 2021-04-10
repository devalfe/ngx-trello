import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { of as observableOf, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Board } from '../model/board';
import { Collaborators } from '../model/collaborators';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public readonly boards: Board[] = [
    {
      id: '1',
      boardName: 'Todo for today',
      collaborators: [
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
        }
      ],
      cards: [
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
      ]
    },
    {
      id: '2',
      boardName: 'Todo for today',
      collaborators: [
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
        }
      ],
      cards: [
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
        }
      ]
    },
    {
      id: '3',
      boardName: 'Todo for today',
      collaborators: [
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
        }
      ],
      cards: [
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
        }
      ]
    }
  ];
  public readonly othersBoards: Board[] = [
    {
      id: '1',
      boardName: 'Todo for today',
      collaborators: [
        {
          uid: '7',
          firstName: 'Lee',
          lastName: 'Wong',
          avatar: 'url',
          email: 'Lee@email.com',
          color: 'F34290'
        },
        {
          uid: '8',
          firstName: 'Alan',
          lastName: 'Thompson',
          avatar: 'url',
          email: 'Alan@email.com',
          color: '29A940'
        },
        {
          uid: '9',
          firstName: 'Kate',
          lastName: 'Martinez',
          avatar: 'url',
          email: 'Kate@email.com',
          color: 'AAACAF'
        }
      ],
      cards: [
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
        }
      ]
    }
  ];
  constructor() {
    const recoverdData = localStorage.getItem('boards');
    if (recoverdData == null) {
      localStorage.setItem('boards', JSON.stringify(this.boards));
      localStorage.setItem('othersBoards', JSON.stringify(this.othersBoards));
    }
  }

  listBoards(): Observable<Board[]> {
    return observableOf(this.boards);
  }
  listOthersBoards(): Observable<Board[]> {
    return observableOf(this.othersBoards);
  }

  addCollaborator(collaborator: Board): void {
    const boardC: Board[] = JSON.parse(localStorage.getItem('boards')) || [];
    const valor = from(boardC)
      .pipe(filter((search) => search.id === collaborator.id))
      .subscribe((board) => {
        const newC = {
          uid: '2' + collaborator['collaborators'].length,
          firstName: 'firstName',
          lastName: 'lastName',
          avatar: 'avatar',
          email: 'email',
          color: 'color'
        };
        board.collaborators.push(newC);
        collaborator['collaborators'].push(newC);
      });

    localStorage.setItem('boards', JSON.stringify(boardC));
  }

  addCard(card: Board, title: string): void {
    const boardC: Board[] = JSON.parse(localStorage.getItem('boards')) || [];
    const valor = from(boardC)
      .pipe(filter((search) => search.id === card.id))
      .subscribe((board) => {
        const newC = {
          id: '1' + card['cards'].length,
          name: title,
          lists: []
        };
        board.cards.push(newC);
        card['cards'].push(newC);
      });

    localStorage.setItem('boards', JSON.stringify(boardC));
  }
}
