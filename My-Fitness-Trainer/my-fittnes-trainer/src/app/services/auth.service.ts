import { Injectable, Inject } from '@angular/core';
import { User } from '../classes/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'
import { UserApiService } from './user-api.service';
import { UserRequest } from '../request/app.request';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private userApiService: UserApiService) { }

  createUser(user: UserRequest, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(user.email, password).then(
      result => {
        this.userApiService.createUser(user).subscribe( params =>
        {
          this.storage.set('email', user.email);
          this.router.navigate(['/home']);
        })
      }
    )
    .catch(error => {
      this.eventAuthError.next(error);
    })
  }

  login(email: string, password: string): void{
    var user = false;
    this.afAuth.signInWithEmailAndPassword(email,password).then(
      result => {
        this.storage.set('email', email);
        this.router.navigate(['/home']);
      }
    )
    .catch(error => {
      this.eventAuthError.next(error);
    })
  }

  signOut(): void{
    this.afAuth.signOut()
    .then(result => {
      this.storage.clear();
      this.router.navigate(["/login"])
    })
  }
}

