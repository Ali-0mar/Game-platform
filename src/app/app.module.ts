import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaderResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { GaugeModule } from "angular-gauge";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

//Components
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpHeadersInterceptor } from "./interceptors/http-headers.interceptor";
import { HttpErrorsInterceptor } from "./interceptors/http-errors.interceptor";
import { DetailsComponent } from "./components/details/details.component";
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
@NgModule({
        declarations: [AppComponent, SearchBarComponent, HomeComponent, DetailsComponent, GameTabsComponent],
        imports: [
                BrowserModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                GaugeModule.forRoot(),
                MatFormFieldModule,
                MatIconModule,
                MatTabsModule,
                MatSelectModule,
        ],
        providers: [
                {
                        provide: HTTP_INTERCEPTORS,
                        useClass: HttpHeadersInterceptor,
                        multi: true,
                },
                {
                        provide: HTTP_INTERCEPTORS,
                        useClass: HttpErrorsInterceptor,
                        multi: true,
                },
        ],
        bootstrap: [AppComponent],
})
export class AppModule {}
