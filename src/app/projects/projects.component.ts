import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sammy-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('PROJECTS');
    this.router.events.subscribe(evt => {
      console.log('ROUTER');
      window.scrollTo(0, 0);
    });
  }
}
