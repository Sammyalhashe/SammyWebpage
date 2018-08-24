import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
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

import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sammy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animationsList]
})
export class AppComponent implements OnInit {
  private navigationBar: HTMLElement;
  loading = true;
  faSpinner = faSync;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'homePage';
  }

  ngOnInit() {
    this.navigationBar = document.getElementById(
      'navigation-bar'
    ) as HTMLElement;
    this.navigationBar.style.display = 'block';
  }
}
