import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  articleid:string

  constructor() { }

  setArticleId(id:string){
    this.articleid=id;
  }

  getArticleId(){
    return this.articleid;
  }
}
