import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uId = null;
  profile:any = null;

  constructor(private _route:ActivatedRoute, private _router: Router, private _user:UserService) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params) =>{
        this.uId = params.nId;
        if(this.uId != null){
          this._user.profile(this.uId).subscribe(
            (data : any)=>{
              this.profile = data;
            },
            (error)=>{
              console.log(error);
            }
          );
        }else{

        }
        console.log(this.uId);
      },
      (error) =>{
        console.log(error);
      }
    );

  }

}
