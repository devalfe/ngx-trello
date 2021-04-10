import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from 'src/app/data/mock/board.service';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public readonly anio = new Date().getFullYear();
  public readonly appVersion = env.versions.appVersion;
  public readonly appName = env.appName;
  public readonly envName = env.envName;
  public isCollapsed = this.boardService.isCollapse();

  constructor(public readonly boardService: BoardService) {}

  ngOnInit(): void {}
}
