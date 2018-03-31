import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { keyframes, trigger, transition, state, style, animate, query, stagger, animateChild, group } from '@angular/animations';
import { IListItem } from '../../shared/listItems';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TimerService } from './timer.service';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
    templateUrl: './sammy.component.html',
    styleUrls: ['./sammy.component.css'],
    animations: [
        trigger('hoverOverTransition', [
            state('Hovered', style({
                height: '310px'
            })),
            state('nonHovered', style({
                height: '100px'
            })),
            transition('nonHovered => Hovered', [
                animate('0.5s ease-in')
            ]),
            transition('Hovered => nonHovered', [
                animate('0.5s ease-in')
            ])
        ]),
        trigger('JhoverOverTransition', [
            state('JHovered', style({
                height: '310px'
            })),
            state('JnonHovered', style({
                height: '100px'
            })),
            transition('JnonHovered => JHovered', [
                animate('0.5s ease-in')
            ]),
            transition('JHovered => JnonHovered', [
                animate('0.5s ease-in')
            ])
        ]),
        trigger('caroselAnimation', [
            transition('* => *', [
                group([
                    query('img', [
                        animate('1.0s ease-in', keyframes([
                            style({ opacity: 0 }),
                            style({ opacity: 1 })
                        ]))
                    ])
                ])
            ])
        ])
    ]
})
export class SammyComponent implements OnInit {
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


    constructor(private _timer: TimerService) {
        this.modalShow = false;
        this.notReadyModalShow = false;
        this.name = 'Sammy';
        this.hoverState = 'nonHovered';
        this.bhoverState = false;
        this.JhoverState = 'JnonHovered';
        this.JbhoverState = false;
        this.items = this.emptyList();
        this.Jitems = this.JemptyList();
        this.pictures = [
            '../../assets/images/tennis.jpg',
            '../../assets/images/Federer-Tweener.jpg'
        ];

        setInterval(() => {
            if (this.picNum === this.pictures.length - 1) {
                this.picNum = 0;
            } else {
                this.picNum++;
            }
            console.log(this.picNum);
            console.log(this.pictures[this.picNum]);
        }, 10000);
    }

    fillList(): IListItem[] {
        this.items = [
            { 'Description': 'Abstract Base Class in Python', 'Link': 'python' },
            { 'Description': 'Multiple Inheritance', 'Link': '' },
            { 'Description': 'Parsing JSON with Python', 'Link': '' }
        ];
        return this.items;
    }

    emptyList(): IListItem[] {
        this.items = [];
        return this.items;
    }


    JfillList(): IListItem[] {
        this.Jitems = [
            { 'Description': 'Abstract Base Class in Python', 'Link': '' },
            { 'Description': 'Multiple Inheritance', 'Link': '' },
            { 'Description': 'Parsing JSON with Python', 'Link': '' }
        ];
        return this.Jitems;
    }

    JemptyList(): IListItem[] {
        this.Jitems = [];
        return this.Jitems;
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async togglePython() {
        if (this.hoverState === 'Hovered') {
            this.items = this.emptyList();
            this.bhoverState = true;
            this.hoverState = 'nonHovered';
        } else if (this.hoverState === 'nonHovered') {
            this.hoverState = 'Hovered';
            await this.delay(500);
            this.items = this.fillList();
            this.bhoverState = (this.hoverState === 'nonHovered' ? false : true);
        }
    }


    async toggleJava() {
        console.log('hover Java');
        if (this.JhoverState === 'JHovered') {
            this.Jitems = this.JemptyList();
            this.JbhoverState = true;
            this.JhoverState = 'JnonHovered';
        } else if (this.JhoverState === 'JnonHovered') {
            this.JhoverState = 'JHovered';
            await this.delay(500);
            this.Jitems = this.JfillList();
            this.JbhoverState = (this.JhoverState === 'JnonHovered' ? false : true);
        }
    }

    carosel() {
        // stuff
        console.log('CAROSEL');
    }

    ngOnInit() {
        this.navigationBar = document.getElementById('navigation-bar') as HTMLElement;
        this.navigationBar.style.display = 'block';
        this._timer.createTimer().subscribe(x => {
            this.carosel();
        })

    }

    displayModal(modalID: string): void {

        switch (modalID) {
            case 'tennisModal': {
                console.log('tennisModal');
                this.modalShow = !this.modalShow;
                console.log(this.modalShow);
                break;
            }
            case 'notReady': {
                console.log('notReadyModal');
                this.notReadyModalShow = !this.notReadyModalShow;
                console.log(this.notReadyModalShow);
                break;
            }
        }
    }
}
