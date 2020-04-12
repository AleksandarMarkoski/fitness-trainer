import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public isError = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(data => {
      if(data){
      console.log(data);
      this.isError = true;
      }
    })
  }

  logIn(logIn: FormGroup): void{
    if(logIn.value.checked === true){
      this.authService.createUser(logIn.value, logIn.value.password);
    }else{
      this.authService.login(logIn.value.email,logIn.value.password);
    }
  }

}
