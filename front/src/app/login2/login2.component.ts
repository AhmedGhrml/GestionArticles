import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SharedServiceService} from "../shared/shared-service.service";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
    formData = new FormData();

    form :FormGroup;
    constructor(private  formBuilder :FormBuilder,private http : HttpClient, private router:Router ,private shared :SharedServiceService) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({

            name:'',
            password :''


        });
        this.shared.setAuth(this.form.controls.name.value)
        this.formData.append("_username",this.form.controls.name.value)
        this.formData.append("_password",this.form.controls.password.value)
    }
    submit():void{
        this.http.post('http://localhost:8000/api/login',this.formData,{withCredentials:true})

        this.router.navigate(['/'])
    }


}
