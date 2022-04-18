import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { APIResponse, Game } from "src/app/models";
import { HttpService } from "src/app/services/http.service";

@Component({
        selector: "app-home",
        templateUrl: "./home.component.html",
        styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
        games!: Array<Game>;
        sort: string = "Sort";
        routSub!: Subscription;
        httpServiceSub!: Subscription;
        constructor(
                private httpService: HttpService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
        ) {}

        ngOnInit(): void {
                this.routSub = this.activatedRoute.params.subscribe((params: Params) => {
                        if (params["game-search"]) {
                                this.searchGames("metacrit", params["game-search"]);
                        } else {
                                this.searchGames("metacrit");
                        }
                });
        }
        searchGames(sort: string, search?: string) {
                this.httpServiceSub = this.httpService
                        .getGameList(sort, search)
                        .subscribe((gameList: APIResponse<Game>) => {
                                this.games = gameList.results;
                                console.log(gameList);
                        });
        }
        getGameDetails(id: number): void {
                this, this.router.navigate(["details", id]);
        }

        ngOnDestroy(): void {
                this.routSub.unsubscribe();
                this.httpServiceSub.unsubscribe();
        }
}
