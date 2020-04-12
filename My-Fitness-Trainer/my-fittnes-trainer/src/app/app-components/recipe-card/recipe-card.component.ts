import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { Router } from '@angular/router';
import { RecipeResponse } from 'src/app/responses/app.responses';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeResponse;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goToDetails(): void {
    this.router.navigate(['/healthy-food', this.recipe.id]);
  }

}
