import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from './mock/board.service';

const SERVICES = [BoardService];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES]
})
export class DataModule {}
