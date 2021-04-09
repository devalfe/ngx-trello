import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user$;
  constructor() {}

  ngOnInit(): void {}
}
