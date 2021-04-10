import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../data/mock/board.service';
import { Board } from '../../data/model/board';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-detail-board',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.scss']
})
export class DetailBoardComponent implements OnInit {
  public readonly imgApi = env.imagenApi;
  public readonly imgNameApi = env.imagenNameApi;
  public board: Board;
  public uId: string;
  public closeResult = '';
  customOptions: any = {
    loop: true,
    margin: 8,
    autoplay: false,
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
  constructor(
    public boardService: BoardService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uId = params.id;
    });
    const valor = from(this.boardService.boards)
      .pipe(filter((search) => search.id === this.uId))
      .subscribe((board) => {
        this.board = board;
      });
  }

  ngOnInit(): void {}

  openModalUser(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openModalCard(card) {
    this.modalService
      .open(card, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openModalList(item) {
    this.modalService
      .open(item, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
