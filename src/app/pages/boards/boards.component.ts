import { BoardService } from './../../data/mock/board.service';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/data/model/board';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  public boards$: Observable<Board[]>;
  customOptions: any = {
    loop: true,
    margin: 8,
    autoplay: true,
    lazyLoad: true,
    responsiveClass: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 7
      },
      940: {
        items: 9
      },
      nav: false
    }
  };
  constructor(public boardService: BoardService) {
    this.boards$ = this.boardService.listBoards();
  }

  ngOnInit(): void {
    // this.boardService.listBoards().subscribe((boards: Board[]) => {
    //   console.log(boards);
    // });
  }
}
