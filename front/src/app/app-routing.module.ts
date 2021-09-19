import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {Login2Component} from "./login2/login2.component";
import {AllArticlesComponent} from "./all-articles/all-articles.component";
import {ArticleComponent} from "./article/article.component";

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'login2',component:Login2Component},
    {path:'articles',component:AllArticlesComponent},
    {path:'article',component:ArticleComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
