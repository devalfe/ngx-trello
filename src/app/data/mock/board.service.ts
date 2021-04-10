import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Board } from '../model/board';

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
  constructor() {}

  listBoards(): Observable<Board[]> {
    return observableOf(this.boards);
  }
  listOthersBoards(): Observable<Board[]> {
    return observableOf(this.othersBoards);
  }
}
