import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
