import { Component, OnInit, Input } from '@angular/core';
import { Excercise } from 'src/app/classes/excercise';
import { Router } from '@angular/router';
import { ExerciseResponse } from 'src/app/responses/app.responses';

@Component({
  selector: 'app-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrls: ['./excercise-card.component.css']
})
export class ExcerciseCardComponent implements OnInit {
  @Input() excercise: ExerciseResponse;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  public goToDetails(): void {
    this.router.navigate(['/excercises',this.excercise.id])
  }

}
