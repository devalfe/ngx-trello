import { Router } from '@angular/router';
import { BoardService } from './../../data/mock/board.service';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/data/model/board';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'ngx-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  public boards$: Observable<Board[]>;
  public othersBoards$: Observable<Board[]>;
  public readonly imgApi = env.imagenApi;
  public readonly imgNameApi = env.imagenNameApi;

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
  constructor(public boardService: BoardService, private router: Router) {
    this.boards$ = this.boardService.listBoards();
    this.othersBoards$ = this.boardService.listOthersBoards();
  }

  ngOnInit(): void {}

  openDetail(id: string): void {
    this.router.navigate(['/board', id]);
  }
}
