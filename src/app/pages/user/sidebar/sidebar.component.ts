import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // categories: any = null;
  user: any = null;

  // constructor(private _category: CategoryService, private _snake: MatSnackBar) { }

  constructor(private _login: LoginService){}

  ngOnInit(): void {

    // -------- OLD Code for Exam Portal

    // this._category.categories().subscribe(
    //   (data: any) => {
    //     this.categories = data;
    //   },
    //   (error) => {
    //     this._snake.open('Unable to load category', '', {
    //       duration: 3000,
    //     });
    //   }
    // );

    // ---------- End Old Code -----------

    this.user = this._login.getUser();

  }

}
