import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from "../shared/shared-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    id:string
    auteur:string;
    currentUser:string="CurrentUser"
    datemodif:string;
    titre:string;
    contenu:string;
    personne:[];

  constructor(private shared : SharedServiceService , private  http : HttpClient ,private router : Router) { }

  ngOnInit(): void {
    console.log(this.shared.getArticleId());

    this.http.get(`http://localhost:8000/api/article/${this.shared.getArticleId()}`,{withCredentials:true}).subscribe(
        (res:any)=>{
          console.log(res.id);
          console.log(res.aimes);
          console.log(res.auteur)
          this.id=res.id;
          this.auteur=res.auteur;
          this.datemodif=res.date_modif;
          this.titre=res.titre;
          this.contenu=res.contenu;
          this.personne=res.aimes

        }
    )
  }

  aimerArticle(id:string){
      this.http.put(`http://localhost:8000/api/articleAime/${id}`,JSON.stringify("ahmed") , {withCredentials:true ,  headers: {'Content-Type': 'text/plain'} }).subscribe(
          (res:any)=>{
              alert("Article liked!!!")
              this.router.navigate(['articles'])
          }

      )




  }

}
