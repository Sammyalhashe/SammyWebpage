import { Component } from '@angular/core';
import { trigger, transition, state, animate, query, style, stagger } from '@angular/animations';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    templateUrl: './sammy-resume.component.html',
    styleUrls: ['./sammy-resume.component.css'],
    animations: [
        trigger('loadanimation', [
            transition('* => *', [
                query('.score', style({ width: 0 }, )),
                query('.score', stagger('500ms', [
                    animate('800ms 0.3s ease-out', style({ width: 70 + '%' }))
                ]))
            ])
        ]),
        trigger('loadanimation1', [
            transition('* => *', [
                query('.score', style({ width: 0 }, )),
                query('.score', stagger('500ms', [
                    animate('800ms 0.3s ease-out', style({ width: 60 + '%' }))
                ]))
            ])
        ]),
        trigger('loadanimation2', [
            transition('* => *', [
                query('.score', style({ width: 0 }, )),
                query('.score', stagger('500ms', [
                    animate('800ms 0.3s ease-out', style({ width: 40 + '%' }))
                ]))
            ])
        ]),
    ]
})
export class ResumeComponent implements OnInit {
    toggleState: boolean;
    navigationBar: HTMLElement;
    constructor() {
        let timeoutId = setTimeout(() => {
            console.log('hello');
        }, 2000);
        console.log(window.location.href);
        this.toggleState = true;
    }

    toggler() {
        console.log('CLICKED');
        this.toggleState = this.toggleState ? false : true;
    }

    ngOnInit() {
        this.navigationBar = document.getElementById('navigation-bar') as HTMLElement;
        // this.navigationBar.style.display = 'none';
    }
}
