import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SharedServiceService} from "../shared/shared-service.service";

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  articles :any[];
  likes
  constructor(private http : HttpClient ,private shared : SharedServiceService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/articles',{withCredentials:true}).subscribe((res:any)=>{
      console.log(res);
      this.articles=res
        for(let i=0;i<res.length ;i++){
          console.log(res[i]);
          //console.log(res.length)


        }
        console.log(this.articles)



    })
  }

  setIdArticle(id){
    this.shared.setArticleId(id);
  }

}
