import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { animationsList } from './projects.animations';

@Component({
  selector: 'sammy-projects',
  templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [animationsList]
})
export class ProjectsComponent implements OnInit, OnDestroy {
    constructor(private router: Router) {}
    projectRoutes: string[];
    routerSubscription: Subscription;
    currentProj: string;
    viewExpand:  boolean;

    ngOnInit(): void {
        this.projectRoutes = ['/finderThingy', '/myWebsite'];
        this.currentProj = '/pipeScanner';
        this.viewExpand = false;
        this.routerSubscription = this.router.events.subscribe(evt => {
            console.log('ROUTER');
            window.scrollTo(0, 0);
        });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }

    nextProj(): void {
        this.projectRoutes.unshift(this.currentProj);
        this.currentProj = this.projectRoutes.pop();
        this.router.navigate(['/projects/' + this.currentProj]);
    }

    prevProj(): void {
        this.projectRoutes.push(this.currentProj);
        this.currentProj = this.projectRoutes.shift();
        this.router.navigate(['/projects/' + this.currentProj]);
    }

    expandView(): void {
       this.viewExpand = this.viewExpand === true ? false : true;
    }

    prepRouteStateProject(outlet: any) {
        return outlet.activatedRouteData['animation'] || 'pipeScanner';
    }
}
