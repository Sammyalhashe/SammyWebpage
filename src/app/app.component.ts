import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
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

import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sammy-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [animationsList]
})
export class AppComponent implements OnInit {
    private navigationBar: HTMLElement;
    loading: boolean = true;
    faSpinner = faSync;
    // displayContact: boolean;
    // navExpand: boolean;

    constructor( private router: Router ) {
        this.router.events.subscribe( (routerEvent: Event) => {
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
