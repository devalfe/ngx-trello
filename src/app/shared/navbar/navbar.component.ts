import { BoardService } from './../../data/mock/board.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    public location: Location,
    public boardService: BoardService
  ) {}

  ngOnInit(): void {}

  home(): void {
    this.router.navigate(['/']);
  }
  isHome(): boolean {
    let url = this.location.prepareExternalUrl(this.location.path());

    if (url.charAt(0) === '#') {
      url = url.slice(1);
    }
    if (url) {
      return false;
    } else {
      return true;
    }
  }
  isExit() {
    console.log(this.boardService.isCollapse());

    this.boardService.isCollapse();
  }
}
