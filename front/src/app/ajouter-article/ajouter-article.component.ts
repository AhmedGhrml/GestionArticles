import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
   date:string;
   aimes:[]=[];
    form :FormGroup;
    constructor(private  formBuilder :FormBuilder,private http : HttpClient, private router:Router) { }

    ngOnInit(): void {
        this.date=(new Date().toISOString().slice(0, 10)).toString();
        this.form = this.formBuilder.group({
            auteur :'CurrentUser',
            titre:'',
            contenu :'',
            dateModif:this.date,
            aimes:[]

        });
    }
    submit():void{
        this.http.post('http://localhost:8000/api/article/ajouter',this.form.getRawValue(),{withCredentials:true})
            .subscribe((res:any)=>{console.log(res)
                alert("Article ajouté avec succées!")
                this.router.navigate(['/'])

                });
    }
}
