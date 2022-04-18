import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                req = req.clone({
                        setHeaders: {
                                "x-rapidapi-key":
                                        "7c60695aaemsh7db846ba96a3f37p1c45c7jsn25e08c7570b2",
                                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                        },
                        setParams: {
                                key: "d4553f821eab46f5a13a6cd3e01424a8",
                        },
                });
                return next.handle(req);
        }
}
