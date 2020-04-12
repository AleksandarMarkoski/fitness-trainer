import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public data = this.storage.get('email');
  public user$: Subscription;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private router: Router,
  private userApiService: UserApiService,
  private authService: AuthService) { }

  ngOnInit(): void {
    if(!this.data){
        this.router.navigate(['/login']);
      }else{
        this.user$ = this.userApiService.getUserDetails(this.data)
        .subscribe(result => {
          if(result.isAdmin){
            this.storage.set('admin', true);
          }
        })
      }
    }

    public signOut(): void{
      this.authService.signOut();
    }

}
