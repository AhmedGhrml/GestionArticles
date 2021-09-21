import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'userid':'1',
        'Access-Control-Allow-Headers': 'Accept'
    })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form :FormGroup;
  constructor(private  formBuilder :FormBuilder,private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
          email :'',
          name:'',
          password :'',
          nbArticle:0

      });
  }
  submit():void{
      this.http.post('http://localhost:8000/api/register',this.form.getRawValue(),{withCredentials:true})
          .subscribe(()=>{

              this.router.navigate(['/login2'])

          });
  }

}
