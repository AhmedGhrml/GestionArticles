import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  articleid:string
  authentife:string
  multipleIdArticles:string[] = []

  constructor() { }

  setArticleId(id:string){
    this.articleid=id;
  }

    setArticlesId(id:string){
        this.multipleIdArticles.push(id+'');
        console.log(this.multipleIdArticles)
    }

  getArticleId(){
    return this.articleid;
  }

    getArticlesId(){
        return this.multipleIdArticles;
    }

    getAuth(){
        return this.authentife;
    }

    setAuth(auth:string){

        this.authentife=auth
    }
}
