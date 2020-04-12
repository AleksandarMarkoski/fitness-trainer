import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Excercise } from 'src/app/classes/excercise';
import { Router } from '@angular/router';
import { ExerciseRequest } from 'src/app/request/app.request';
import { ExercisesResponse } from 'src/app/responses/app.responses';
import { ExerciseApiService } from 'src/app/services/exercise-api.service';
import { Subscription } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit, OnDestroy {

  public excercises: ExercisesResponse;
  public $data: Subscription;
  public isAdmin = this.storage.get('admin');
  constructor(
    private router: Router,
    private exerciseApiService: ExerciseApiService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit(): void {
    this.$data = this.exerciseApiService.getAllExercises()
    .subscribe({
      next: params => {
        this.excercises = params;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  public goToAddPage(): void {
    this.router.navigate(['/excercises', 'add-new']);
  }

  ngOnDestroy(): void {
    if(this.$data){
      this.$data.unsubscribe();
    }
  }
}
