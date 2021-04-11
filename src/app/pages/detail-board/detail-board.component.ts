import { Swal2Service } from './../../data/mock/swal2.service';
import { Comments, Labels, List } from './../../data/model/list';
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../data/mock/board.service';
import { Board } from '../../data/model/board';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public userForm: FormGroup;
  public cardForm: FormGroup;
  public itemForm: FormGroup;
  public labels: Labels[];
  public comments: Comments[];

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
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public sal2Service: Swal2Service
  ) {
    this.formUser();
    this.formCard();
    this.formItem();
    this.activatedRoute.params.subscribe((params: any) => {
      this.uId = params.id;
    });
    const boardC: Board[] = JSON.parse(localStorage.getItem('boards')) || [];
    // eslint-disable-next-line no-unused-vars
    const valor = from(boardC)
      .pipe(filter((search) => search.id === this.uId))
      .subscribe((board) => {
        this.board = board;
      });
  }

  ngOnInit(): void {}

  formUser(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  formCard(): void {
    this.cardForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  formItem(): void {
    this.itemForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.minLength(8)],
      label: [''],
      comments: [''],
      comment: ['', Validators.minLength(8)]
    });
  }

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
  openModalList(item, lists: List) {
    this.itemForm.controls.title.setValue(lists.title);
    this.itemForm.controls.description.setValue(lists.description);
    this.labels = lists.labels;
    this.comments = lists.comments;

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

  addUser(): void {
    if (this.userForm.valid) {
      this.boardService.addCollaborator(this.board);
      this.userForm.reset();
    }
  }
  addCard(): void {
    if (this.cardForm.valid) {
      this.boardService.addCard(this.board, this.cardForm.value.title);
      this.cardForm.reset();
    }
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
