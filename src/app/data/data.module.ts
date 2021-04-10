import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from './mock/board.service';
import { CollaboratorService } from './mock/collaborator.service';

const SERVICES = [BoardService, CollaboratorService];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES]
})
export class DataModule {}
