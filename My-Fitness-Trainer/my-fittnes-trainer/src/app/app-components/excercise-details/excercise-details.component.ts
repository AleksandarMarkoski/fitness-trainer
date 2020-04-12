import { Component, OnInit, OnDestroy } from '@angular/core';
import { Excercise } from 'src/app/classes/excercise';
import { Router, ActivatedRoute } from '@angular/router';
import { ExerciseResponse } from 'src/app/responses/app.responses';
import { Subscription } from 'rxjs';
import { ExerciseApiService } from 'src/app/services/exercise-api.service';
import { FormGroup } from '@angular/forms';
import { ExerciseRequest, ExerciseUpdateRequest } from 'src/app/request/app.request';

@Component({
  selector: 'app-excercise-details',
  templateUrl: './excercise-details.component.html',
  styleUrls: ['./excercise-details.component.css']
})
export class ExcerciseDetailsComponent implements OnInit, OnDestroy {
  public isEditing = false;
  public excercise: ExerciseResponse;
  public data$: Subscription
  constructor(
    private route: ActivatedRoute,
    private exerciseApiService: ExerciseApiService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.data$ = this.exerciseApiService.getExerciseDetails(this.route.snapshot.params['id'])
    .subscribe({
      next: result => {
        this.excercise = result;
      },
      error: error=> {

      }
    })
  }

  AddThisForm(addForm: FormGroup): void {
    let exerciseRequest = new ExerciseUpdateRequest;
    exerciseRequest.title = addForm.value.title;
    exerciseRequest.description = addForm.value.description;
    exerciseRequest.url = this.excercise.url;
    exerciseRequest.votes = this.excercise.votes;
    exerciseRequest.id = this.excercise.id;
    this.isEditing = false;
    this.exerciseApiService.updateExercise(exerciseRequest)
    .subscribe( response => {
      this.router.navigate(['/excercises']);
    })
  }

  setToEditing(edit: boolean): void{
    this.isEditing = edit;
  }

  goBack(): void {
    this.router.navigate(['/excercises']);
  }
  
  ngOnDestroy(): void {
    if(this.data$){
      this.data$.unsubscribe();
    }
  }
}
