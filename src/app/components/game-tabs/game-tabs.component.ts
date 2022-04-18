import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Game } from "src/app/models";
@Component({
        selector: "app-game-tabs",
        templateUrl: "./game-tabs.component.html",
        styleUrls: ["./game-tabs.component.scss"],
})
export class GameTabsComponent implements OnInit, OnChanges {
        @Input() game?: Game;
        constructor() {}

        ngOnInit(): void {}
        ngOnChanges(changes: SimpleChanges): void {
                console.log(this.game);
        }
}
