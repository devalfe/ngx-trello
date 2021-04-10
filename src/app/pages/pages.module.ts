import { DataModule } from './../data/data.module';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BoardsComponent } from './boards/boards.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';

@NgModule({
  declarations: [PagesComponent, BoardsComponent, DetailBoardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CoreModule,
    CarouselModule,
    DataModule
  ]
})
export class PagesModule {}
