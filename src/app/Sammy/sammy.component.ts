import { IpicsItem } from './../../shared/IpicsItem';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IListItem } from '../../shared/listItems';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { PageService } from '../../shared/sharedPageService.service';

import { animationsList } from './sammy.component.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './secondary.html',
  styleUrls: ['./sammy.component.css'],
  animations: [animationsList]
})
export class SammyComponent implements OnInit, OnDestroy {
  // class properties
  elems: HTMLCollectionOf<Element>;
  secondContainer: Element;
  thirdContainer: Element;
  windowHeight: number;
  navigationBar: HTMLElement;
  picExpand: boolean;
  Jitems: IListItem[];
  JhoverState: string;
  hoverState: string;
  secondContainerEnter: boolean;
  thirdContainerEnter: boolean;
  items: IListItem[];
  errorMessage: string;
  JerrorMessage: string;
  pySubscription: Subscription;
  qcSubscription: Subscription;

  constructor(private _timer: TimerService, private route: ActivatedRoute) {
    // initialize class props
    this.hoverState = 'nonHovered';
    this.JhoverState = 'JnonHovered';
    this.secondContainerEnter = false;
    this.thirdContainerEnter = false;
    this.init = this.init.bind(this);
    this._addEventHandlers = this._addEventHandlers.bind(this);
    this._removeEventHandlers = this._removeEventHandlers.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }

  init(): void {
    this.elems = document.getElementsByClassName('expCont');
    this.windowHeight = window.innerHeight;
    this._addEventHandlers();
  }

  _addEventHandlers(): void {
    window.addEventListener('scroll', this.checkPosition);
    window.addEventListener('resize', this.init);
  }

  _removeEventHandlers(): void {
    window.removeEventListener('scroll', this.checkPosition);
    window.removeEventListener('resize', this.init);
  }

  checkPosition(): void {
    if (window.innerWidth >= 757) {
      if (document.getElementById('picME').getBoundingClientRect().top >= 208) {
        this.picExpand = true;
      } else {
        this.picExpand = false;
      }
    }
    console.log(this.picExpand);

    // I only do this for larger screen in case of app
    if (window.innerWidth >= 757) {
      // for sliding in main container divs
      if (
        this.secondContainer.getBoundingClientRect().top - this.windowHeight <=
        0
      ) {
        this.secondContainerEnter = true;
      }

      if (
        this.thirdContainer.getBoundingClientRect().top - this.windowHeight <=
        0
      ) {
        this.thirdContainerEnter = true;
      }
    }

    // for expanding container
    for (let i = 0; i < this.elems.length; i++) {
      const positionFromTop = this.elems[i].getBoundingClientRect().top;
      if (positionFromTop - this.windowHeight <= 0) {
        this.hoverState = 'Hovered';
        this.JhoverState = 'JHovered';
      }
    }
  }

  // fill the list of Python topics
  fillList(): IListItem[] {
    this.items = [
      { Description: 'Abstract Base Class in Python', Link: 'abc' },
      { Description: 'Multiple Inheritance', Link: 'multipleInheritance' },
      { Description: 'Parsing JSON with Python', Link: 'parseJson' }
    ];
    return this.items;
  }

  // empty list of Python topics
  emptyList(): IListItem[] {
    this.items = [];
    return this.items;
  }

  // fill list of QC topics
  JfillList(): IListItem[] {
    this.Jitems = [
      {
        Description: 'Comparative Analysis: Rigetti vs IBM Q',
        Link: 'Rigetti_vs_IMB'
      },
      { Description: 'Linear Algebra Concepts in QM', Link: 'linAlg' }
    ];
    return this.Jitems;
  }

  // empty list of QC topics
  JemptyList(): IListItem[] {
    this.Jitems = [];
    return this.Jitems;
  }

  /*
    Toggles if the Python state is hovered over or not by updating three
    class props (work on trying to reduce the number of props used):
      1) a hover state label
      2) a hover state bool
      3) the list being filled or not
  */
  togglePython() {
    if (this.hoverState === 'Hovered') {
      this.hoverState = 'nonHovered';
    } else if (this.hoverState === 'nonHovered') {
      this.hoverState = 'Hovered';
    }
  }

  /* same thing as above */
  toggleJava() {
    if (this.JhoverState === 'JHovered') {
      this.JhoverState = 'JnonHovered';
    } else if (this.JhoverState === 'JnonHovered') {
      this.JhoverState = 'JHovered';
    }
  }

  onTypingComplete(): void {
    console.log('TYPED!!');
  }

  ngOnInit() {
    this.navigationBar = document.getElementById(
      'navigation-bar'
    ) as HTMLElement;
    this.navigationBar.style.display = 'block';

    // subscribing to the service timer.service
    // this.pySubscription = this._timer
    //   .getPythonLinks()
    //   .subscribe(
    //     links => (this.items = links),
    //     err => (this.errorMessage = err as any)
    //   );

    // this.qcSubscription = this._timer
    //   .getQcLinks()
    //   .subscribe(
    //     links => (this.Jitems = links),
    //     err => (this.JerrorMessage = err as any)
    //   );

    // using route resolver
    this.route.data.do(console.log).subscribe(data => {
      this.pySubscription = data['links'].pythonLinks.subscribe(
        links => (this.items = links),
        err => (this.errorMessage = err as any)
      );
      this.qcSubscription = data['links'].qcLinks.subscribe(
        links => (this.Jitems = links),
        err => (this.JerrorMessage = err as any)
      );
    });
    // this.pySubscription = this.actr.data
    //   .map(data => data.links.json().pythonLinks)
    //   .subscribe(
    //     links => (this.items = links),
    //     err => (this.errorMessage = err as any)
    //   );
    // this.qcSubscription = this.actr.data
    //   .map(data => data.links.json().qcLinks)
    //   .subscribe(
    //     links => (this.Jitems = links),
    //     err => (this.errorMessage = err as any)
    //   );
    this.secondContainer = document.getElementById('secondContainer');
    this.thirdContainer = document.getElementById('thirdContainer');
    this.picExpand = true;
    this.init();
  }

  ngOnDestroy(): void {
    this.pySubscription.unsubscribe();
    this.qcSubscription.unsubscribe();
    this._removeEventHandlers();
  }
}
