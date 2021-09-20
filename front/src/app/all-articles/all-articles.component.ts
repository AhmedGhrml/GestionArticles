import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SharedServiceService} from "../shared/shared-service.service";
import {arrayify} from "tslint/lib/utils";
import {Router} from "@angular/router";
import {Articles} from "../interfaces/articles";

@Component({
    selector: 'app-all-articles',
    templateUrl: './all-articles.component.html',
    styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
    articles: Articles[] = [];
    auteur="CurrentUser"
    authentificated:boolean=true
    constructor(private http: HttpClient, private shared: SharedServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.http.get('http://localhost:8000/api/articles', {withCredentials: true}).subscribe((res: any) => {
            for (let i = 0; i < res.length; i++) {
                console.log(res[i])
                this.articles.push(res[i])
            }


        })
    }

    setIdArticle(id) {
        this.shared.setArticleId(id);
    }

    aimerArticle(id: string) {
        this.http.put(`http://localhost:8000/api/articleAime/${id}`, JSON.stringify(this.auteur), {
            withCredentials: true,
            headers: {'Content-Type': 'text/plain'}
        }).subscribe(
            (res: any) => {
                alert("Article liked!!!")
                this.router.navigate(['articles'])
            }
        )

    }
}