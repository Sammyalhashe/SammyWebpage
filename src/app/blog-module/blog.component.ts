import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private blogToDisplay: string;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log('BLOG');
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log('ROUTER');
      window.scrollTo(0, 0);
    });

    this.route.params.subscribe(params => {
      const string_id = params['id'];
      this.blogToDisplay = string_id;
    });
  }
}
