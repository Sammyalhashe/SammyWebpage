import { IpicsItem } from './../../shared/IpicsItem';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  keyframes,
  trigger,
  transition,
  state,
  style,
  animate,
  query,
  stagger,
  animateChild,
  group
} from '@angular/animations';
import { IListItem } from '../../shared/listItems';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs/Subscription';
import { PageService } from '../../shared/sharedPageService.service';

// import * as Typed from "typed.js"; // I used this for practice in using a JS library. I also used the Angular equivalent to type my name

@Component({
  templateUrl: './secondary.html',
  styleUrls: ['./sammy.component.css'],
  animations: [
    trigger('hoverOverTransition', [
      state(
        'Hovered',
        style({
          height: '310px'
        })
      ),
      state(
        'nonHovered',
        style({
          height: '100px'
        })
      ),
      transition('nonHovered => Hovered', [animate('0.5s ease-in')]),
      transition('Hovered => nonHovered', [animate('0.5s ease-in')])
    ]),
    trigger('JhoverOverTransition', [
      state(
        'JHovered',
        style({
          height: '310px'
        })
      ),
      state(
        'JnonHovered',
        style({
          height: '100px'
        })
      ),
      transition('JnonHovered => JHovered', [animate('0.5s ease-in')]),
      transition('JHovered => JnonHovered', [animate('0.5s ease-in')])
    ]),
    trigger('caroselAnimation', [
      transition('* => *', [
        group([
          query('img', [
            animate(
              '1.0s ease-in',
              keyframes([style({ opacity: 0 }), style({ opacity: 1 })])
            )
          ])
        ])
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', animate('0.1s ease-in', style({ opacity: 1 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class SammyComponent implements OnInit, OnDestroy {
  // class properties
  navigationBar: HTMLElement;
  Jitems: IListItem[];
  JbhoverState: boolean;
  JhoverState: string;
  hoverState: string;
  bhoverState: boolean;
  name: string;
  modalShow: boolean;
  notReadyModalShow: boolean;
  items: IListItem[];
  pictures: string[];
  picNum = 1;
  errorMessage: string;
  JerrorMessage: string;
  picserrorMessage: string;
  pySubscription: Subscription;
  qcSubscription: Subscription;

  constructor(private _timer: TimerService) {
    // initialize class props
    this.modalShow = false;
    this.notReadyModalShow = false;
    this.name = 'Sammy';
    this.hoverState = 'nonHovered';
    this.JhoverState = 'JnonHovered';
    this.pictures = [
      '../../assets/images/tennis.jpg',
      '../../assets/images/Federer-Tweener.jpg',
      '../../assets/images/fedHat.jpg'
    ];

    // setInterval function calls the internal function after a given time (2nd arg in ms)
    setInterval(() => {
      if (this.picNum === this.pictures.length - 1) {
        this.picNum = 0;
      } else {
        this.picNum++;
      }
    }, 10000);
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

  // returns a promise to be used by async function togglePython (and the QC equivalent)
  /*
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  */

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

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);

    this.navigationBar = document.getElementById(
      'navigation-bar'
    ) as HTMLElement;
    this.navigationBar.style.display = 'block';

    // subscribing to the service timer.service
    this.pySubscription = this._timer
      .getPythonLinks()
      .subscribe(
        links => (this.items = links),
        err => (this.errorMessage = err as any)
      );

    this.qcSubscription = this._timer
      .getQcLinks()
      .subscribe(
        links => (this.Jitems = links),
        err => (this.JerrorMessage = err as any)
      );
    // let typed: any = new Typed(".typed", {
    //   strings: ["Tennis Addict", "Developer"],
    //   typeSpeed: 25,
    //   backSpeed: 25,
    //   fadeOut: false,
    //   loop: true
    // });
    setTimeout(() => {}, 1000);
  }

  ngOnDestroy(): void {
    this.pySubscription.unsubscribe();
    this.qcSubscription.unsubscribe();
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll(): void {
    console.log('SCROLLED');
  }

  displayModal(modalID: string): void {
    switch (modalID) {
      case 'tennisModal': {
        this.modalShow = !this.modalShow;
        console.log(this.modalShow);
        break;
      }
      case 'notReady': {
        this.notReadyModalShow = !this.notReadyModalShow;
        console.log(this.notReadyModalShow);
        break;
      }
    }
  }

  onTypingComplete(): void {
    console.log('TYPED!!');
  }
}
