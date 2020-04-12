import { Component, OnInit, Inject } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private userService :UserApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(result => {
    });
  }

}