import { Component } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  query,
  style,
  stagger,
  group
} from '@angular/animations';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { PageService } from '../../shared/sharedPageService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './sammy-resume.component.html',
  styleUrls: ['./sammy-resume.component.css'],
  animations: [
    trigger('loadanimation', [
      transition('* => *', [
        query('.score', style({ width: 0 })),
        query(
          '.score',
          stagger('500ms', [
            animate('800ms 0.3s ease-out', style({ width: 80 + '%' }))
          ])
        )
      ])
    ]),
    trigger('loadanimation1', [
      transition('* => *', [
        query('.score', style({ width: 0 })),
        query(
          '.score',
          stagger('500ms', [
            animate('800ms 0.3s ease-out', style({ width: 60 + '%' }))
          ])
        )
      ])
    ]),
    trigger('loadanimation4', [
      transition('* => *', [
        query('.score', style({ width: 0 })),
        query(
          '.score',
          stagger('500ms', [
            animate('800ms 0.3s ease-out', style({ width: 75 + '%' }))
          ])
        )
      ])
    ]),
    trigger('loadanimation5', [
      transition('* => *', [
        query('.score', style({ width: 0 })),
        query(
          '.score',
          stagger('500ms', [
            animate('800ms 0.3s ease-out', style({ width: 30 + '%' }))
          ])
        )
      ])
    ]),
    trigger('loadanimation2', [
      transition('* => *', [
        query('.score', style({ width: 0 })),
        query(
          '.score',
          stagger('500ms', [
            animate('800ms 0.3s ease-out', style({ width: 40 + '%' }))
          ])
        )
      ])
    ]),
    trigger('loadanimation3', [
      transition('* => *', [
        query(
          '.skillsLogo',
          [
            animate(
              '800ms 0.3s ease-out',
              style({ transform: 'rotate(360deg)' })
            )
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ResumeComponent implements OnInit {
  toggleState: boolean;
  navigationBar: HTMLElement;
  profileURL: string | null;
  resumeURL: string | null;
  constructor(
    private storage: AngularFireStorage,
    private route: ActivatedRoute
  ) {
    /*
         *const ref = this.storage.ref('Photos/SanFranBeach.jpg');
         *this.profileURL = ref.getDownloadURL();
         */
    this.route.data.subscribe(data => {
      this.profileURL = data.firebasepic;
      this.resumeURL = data.firebaseresume;
      // data['firebasepic'].subscribe(pic => {
      //   this.profileURL = pic;
      // });
      // data['firebaseresume'].subscribe(res => {
      //   this.resumeURL = res;
      // });
      // console.log(this.profileURL);
    });
    this.toggleState = true;
  }

  toggler() {
    this.toggleState = this.toggleState ? false : true;
  }

  ngOnInit() {
    this.navigationBar = document.getElementById(
      'navigation-bar'
    ) as HTMLElement;

    // this.navigationBar.style.display = "none";
  }
}
