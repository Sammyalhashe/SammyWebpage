import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  trigger,
  keyframes,
  transition,
  query,
  animate,
  style,
  group,
  animateChild,
  stagger,
  state
} from '@angular/animations';
import { animationsList } from './app.component.animations';
import { PageService } from '../shared/sharedPageService.service';

@Component({
  selector: 'sammy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animationsList]
})
export class AppComponent implements OnInit {
  private navigationBar: HTMLElement;
  // displayContact: boolean;
  // navExpand: boolean;

  constructor() {
    // this.init = this.init.bind(this);
    // this._addEventHandlers = this._addEventHandlers.bind(this);
    // this._removeEventHandlers = this._removeEventHandlers.bind(this);
    // this.checkPosition = this.checkPosition.bind(this);
  }

  // init(): void {
  //   this._addEventHandlers();
  // }

  // _addEventHandlers(): void {
  //   window.addEventListener('scroll', this.checkPosition);
  // }

  // _removeEventHandlers(): void {
  //   window.removeEventListener('scroll', this.checkPosition);
  // }

  // checkPosition(e) {
  //   e.preventDefault();
  //   if (window.innerWidth >= 757 && window.innerWidth <= 1699) {
  //     if (
  //       document.getElementById('picME').getBoundingClientRect().top === 208
  //     ) {
  //       this.navExpand = true;
  //     } else {
  //       this.navExpand = false;
  //     }
  //   }
  //   console.log(this.navExpand);
  // }

  prepRouteState(outlet: any) {
    // if (outlet.activatedRouteData['animation'] === 'homePage') {
    //   // this._addEventHandlers();
    //   this.displayContact = true;
    // } else {
    //   this.displayContact = false;
    //   // this._removeEventHandlers();
    // }
    return outlet.activatedRouteData['animation'] || 'homePage';
  }

  ngOnInit() {
    this.navigationBar = document.getElementById(
      'navigation-bar'
    ) as HTMLElement;
    this.navigationBar.style.display = 'block';

    // this.navExpand = true;

    // this.init();
  }
}
