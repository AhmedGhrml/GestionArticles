import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SharedServiceService} from "../shared/shared-service.service";

@Component({
  selector: 'app-mes-articles',
  templateUrl: './mes-articles.component.html',
  styleUrls: ['./mes-articles.component.css']
})
export class MesArticlesComponent implements OnInit {
        articles : any[];
        idTab:string[];
  constructor(private http : HttpClient , private shared:SharedServiceService) { }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/api/articleAuteur/CurrentUser",{withCredentials:true}).subscribe(
        (res:any)=>{
          console.log(res)
            this.articles=res;
        }
    )
      console.log(this.shared.getArticlesId())

  }
    setIdArticle(id){
        this.shared.setArticleId(id);
    }

    setIdArticles(id){
      console.log(id)
        this.shared.setArticlesId(id);
    }
  supprimerArticles(id:string){
      this.http.delete(`http://127.0.0.1:8000/api/articles/${id}`,{withCredentials:true}).subscribe(
          (res:any)=>{
              console.log(res)

          }
      )
  }
     options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        body: this.shared.getArticlesId()
    };

  multipleDelete(){
      this.idTab=this.shared.getArticlesId()
      console.log(this.idTab)
      this.http.delete(`http://127.0.0.1:8000/api/articlesss/delete`,this.options).subscribe(
          ((res:any)=>{
              console.log(res)
          })
      )

  }

}