import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { Login2Component } from './login2/login2.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { MesArticlesComponent } from './mes-articles/mes-articles.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    AllArticlesComponent,
    NavComponent,
    ArticleComponent,
    AjouterArticleComponent,
    MesArticlesComponent,
    ModifArticleComponent
  ],
  imports: [HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
