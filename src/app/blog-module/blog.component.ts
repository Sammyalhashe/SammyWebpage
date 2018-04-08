import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log("BLOG");
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log("ROUTER");
      window.scrollTo(0, 0);
    });
  }
}
