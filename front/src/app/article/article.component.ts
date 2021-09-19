import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from "../shared/shared-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  auteur:string;
  datemodif:string;
  titre:string;
  contenu:string;
  personne:[];
  constructor(private shared : SharedServiceService , private  http : HttpClient) { }

  ngOnInit(): void {
    console.log(this.shared.getArticleId());
    this.http.get(`http://localhost:8000/api/article/${this.shared.getArticleId()}`,{withCredentials:true}).subscribe(
        (res:any)=>{
          console.log(res.id);
          console.log(res.aimes);
          this.auteur=res.auteur;
          this.datemodif=res.date_modif;
          this.titre=res.titre;
          this.contenu=res.contenu;
          this.personne=res.aimes

        }
    )
  }

}
