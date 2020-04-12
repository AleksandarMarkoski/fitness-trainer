import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { RecipesResponse } from 'src/app/responses/app.responses';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { Subscription } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthy-food',
  templateUrl: './healthy-food.component.html',
  styleUrls: ['./healthy-food.component.css']
})
export class HealthyFoodComponent implements OnInit, OnDestroy {
  public data$: Subscription
  public recipes: RecipesResponse;
  public isAdmin = this.storage.get('admin');

  constructor(
    private recipeApi: RecipeApiService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data$ = this.recipeApi.getAllRecipes()
    .subscribe({
      next: result=>{
        this.recipes = result
      },
      error: error=>{
        console.log(error.error);
      }
    })
  }

  public goToAddPage(): void {
    this.router.navigate(['/healthy-food', 'add-new']);
  }


  ngOnDestroy(): void {
    if(this.data$){
      this.data$.unsubscribe();
    }
  }
}
