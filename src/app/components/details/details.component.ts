import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { Game } from "src/app/models";
import { HttpService } from "src/app/services/http.service";

@Component({
        selector: "app-details",
        templateUrl: "./details.component.html",
        styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit, OnDestroy {
        gameRating = 0;
        gameId!: string;
        game!: Game;
        error: string = "";
        routerSub!: Subscription;
        gameSub!: Subscription;
        constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {}
        getColor(value: number): string {
                if (value > 75) {
                        return "#5ee432";
                } else if (value > 50) {
                        return "#fffa50";
                } else if (value > 30) {
                        return "#f7aa38";
                } else {
                        return "#ef4655";
                }
        }
        ngOnInit(): void {
                this.routerSub = this.activatedRoute.params.subscribe((params: Params) => {
                        this.gameId = params["id"];
                        this.getGameDetails(this.gameId);
                });
        }

        getGameDetails(id: string): void {
                this.gameSub = this.httpService.getGameDetails(id).subscribe({
                        next: (gameResp: Game) => {
                                console.log(gameResp);
                                this.game = gameResp;
                                setTimeout(() => {
                                        if (this.game.metacritic) {
                                                this.gameRating = this.game.metacritic;
                                        }
                                }, 1000);
                        },
                        error: (err) => {
                                this.error = err.message;
                                console.log(err);
                        },
                });
        }
        ngOnDestroy(): void {
                this.gameSub.unsubscribe();
                this.routerSub.unsubscribe();
        }
}
