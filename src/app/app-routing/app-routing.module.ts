import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SearchBarComponent } from "../components/search-bar/search-bar.component";
import { DetailsComponent } from "../components/details/details.component";

const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "search/:game-search", component: SearchBarComponent },
        { path: "details/:id", component: DetailsComponent },
];

@NgModule({
        declarations: [],
        imports: [CommonModule, RouterModule.forRoot(routes)],
        exports: [RouterModule],
})
export class AppRoutingModule {}
