import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import {
  trigger,
  keyframes,
  transition,
  query,
  animate,
  style,
  group,
  animateChild,
  stagger,
  state
} from "@angular/animations";

@Component({
  selector: "sammy-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("dropdownAnimation", [
      state("false", style({ display: "none" })),
      state("true", style({ display: "block" })),
      transition("false <=> true", [animate(500)])
    ]),
    trigger("routeAnimation", [
      transition(":enter", []), // don't need to animate on load
      transition("homePage => resumePage", [
        group([
          query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
            optional: true
          }),
          group([
            query(
              ":enter",
              stagger("1ms", [
                animate(
                  "1s ease-in-out",
                  keyframes([
                    style({ opacity: 0.2, transform: "translateX(100%)" }),
                    style({ opacity: 1, transform: "translateX(0%)" })
                  ])
                ),
                query("@loadanimation", [animateChild()], { optional: true }),
                query("@loadanimation1", [animateChild()], { optional: true }),
                query("@loadanimation2", [animateChild()], { optional: true })
              ])
            ),
            query(
              ":leave",
              [
                animate(
                  "1s ease-in-out",
                  keyframes([
                    style({ opacity: 1, transform: "translateX(0%)" }),
                    style({ opacity: 0, transform: "translateX(-100%)" })
                  ])
                )
              ],
              { optional: true }
            )
          ])
        ])
      ]),
      transition("resumePage => homePage", [
        group([
          query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
            optional: true
          }),
          group([
            query(
              ":enter",
              [
                animate(
                  "1s ease-in-out",
                  keyframes([
                    style({ opacity: 0.2, transform: "translateX(-100%)" }),
                    style({ opacity: 1, transform: "translateX(0%)" })
                  ])
                )
              ],
              { optional: true }
            ),
            query(
              ":leave",
              [
                animate(
                  "1s ease-in-out",
                  keyframes([
                    style({ opacity: 1, transform: "translateX(0%)" }),
                    style({ opacity: 0, transform: "translateX(100%)" })
                  ])
                )
              ],
              { optional: true }
            )
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  private navigationBar: HTMLElement;
  dropDownActivated: boolean;

  constructor() {}

  toggleDropdown(): void {
    this.dropDownActivated = this.dropDownActivated === false ? true : false;
  }

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData["animation"] || "homePage";
  }

  ngOnInit() {
    this.navigationBar = document.getElementById(
      "navigation-bar"
    ) as HTMLElement;
    this.navigationBar.style.display = "block";

    this.dropDownActivated = false;
  }
}
