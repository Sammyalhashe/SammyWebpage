import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, state, style, animate, query, stagger, animateChild } from '@angular/animations';
import { IListItem } from '../../shared/listItems';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { TimerService } from "./timer.service";

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
    items: IListItem[];

    constructor(private _timer: TimerService ) {
        this.name = 'Sammy';
        this.hoverState = 'nonHovered';
        this.bhoverState = false;
        this.JhoverState = 'JnonHovered';
        this.JbhoverState = false;
        this.items = this.emptyList();
        this.Jitems = this.JemptyList();
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
}
