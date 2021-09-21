import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SharedServiceService} from "../shared/shared-service.service";

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.component.html',
  styleUrls: ['./modif-article.component.css']
})
export class ModifArticleComponent implements OnInit {
    id:string
    auteur:string="";
    datemodif:string;
    titre:string="";
    contenu:string;
    personne:[];
    date:string;
    aimes:[];
    form :FormGroup;
    constructor(private  formBuilder :FormBuilder,private http : HttpClient, private router:Router ,private shared:SharedServiceService) { }

    ngOnInit(): void {
        console.log(this.shared.getArticleId())
        this.date=new Date().toString();
        console.log(this.date)
        this.http.get(`http://localhost:8000/api/article/${this.shared.getArticleId()}`,{withCredentials:true}).subscribe(
            (res:any)=>{
                console.log(res.id);
                console.log(res.aimes);
                console.log(res.titre)
                this.datemodif=res.date_modif


                this.form = this.formBuilder.group({


                    titre:res.titre,
                    contenu :res.contenu,
                    dateModif:this.date,
                    aimes:res.aimes

                });

            }
        )


    }
    submit():void{
        this.http.put(`http://localhost:8000/api/articless/${this.shared.getArticleId()}`,this.form.getRawValue(),{withCredentials:true})
            .subscribe((res:any)=>{console.log(res)
                alert("Article Modifié avec succées!")
                this.router.navigate(['articles'])

            });
    }
}
