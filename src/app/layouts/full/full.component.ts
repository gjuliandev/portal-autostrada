import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html'
})
export class FullComponent implements OnInit {

  mobileQuery: MediaQueryList | undefined;

  green = true;
  blue = false;
  dark = false;
  minisidebar = false;
  boxed = false;
  danger = false;
  showHide = false;
  horizontal = false;
  url = '';
  sidebarOpened = false;
  status = false;

  constructor() { }

  ngOnInit(): void {
  }

}
