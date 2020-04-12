import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { ExerciseApiService } from 'src/app/services/exercise-api.service';
import { Excercise } from 'src/app/classes/excercise';
import { ExerciseRequest } from 'src/app/request/app.request';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public exercise: ExerciseRequest;

  constructor(
    private exerciseService: ExerciseApiService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit(): void {
    if(!this.storage.get('admin')){
      this.router.navigate(['/login'])
    }
  }

  public AddThisForm(addForm: FormGroup): void{
    this.exercise = addForm.value
    this.exercise.votes = 0;

    this.exerciseService.createExercise(this.exercise).subscribe(
      params=> {
        this.router.navigate(['/excercises'])
      }
    )
  }
  goBack(): void {
    this.router.navigate(['/excercises']);
  }

}
