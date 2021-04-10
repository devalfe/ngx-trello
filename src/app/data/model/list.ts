import { Collaborators } from './collaborators';

export class List {
  id: string;
  title: string;
  description: string;
  labels: Labels[];
  comments: Comments[];
}

export class Labels {
  name?: string;
}

export class Comments {
  comment?: string;
  collaborators: Collaborators;
}
