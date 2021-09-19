import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {Login2Component} from "./login2/login2.component";
import {AllArticlesComponent} from "./all-articles/all-articles.component";
import {ArticleComponent} from "./article/article.component";
import {AjouterArticleComponent} from "./ajouter-article/ajouter-article.component";
import {MesArticlesComponent} from "./mes-articles/mes-articles.component";
import {ModifArticleComponent} from "./modif-article/modif-article.component";

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'login2',component:Login2Component},
    {path:'articles',component:AllArticlesComponent},
    {path:'article',component:ArticleComponent},
    {path:'article/ajouter',component:AjouterArticleComponent},
    {path:'article/mesarticles',component:MesArticlesComponent},
    {path:'article/modifer',component:ModifArticleComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
