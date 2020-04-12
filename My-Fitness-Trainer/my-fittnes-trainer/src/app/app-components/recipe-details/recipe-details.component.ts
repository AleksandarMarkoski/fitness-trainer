import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeRequest, RecipeUpdateRequest, UserRequest } from 'src/app/request/app.request';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { RecipeResponse } from 'src/app/responses/app.responses';
import { FormGroup } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  public isEditing = false;
  public recipe: RecipeResponse;
  public data$: Subscription
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeApiService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }
  
  ngOnInit(): void {
    this.data$ = this.recipeService.getRecipeDetails(this.route.snapshot.params['id'])
    .subscribe({
      next: result => {
        this.recipe = result;
      },
      error: error=> {
        
      }
    })
  }

  AddThisForm(addForm: FormGroup): void {
    let recipeRequest = new RecipeUpdateRequest;
    recipeRequest.user = new UserRequest;
    recipeRequest.title = addForm.value.title;
    recipeRequest.description = addForm.value.description;
    recipeRequest.url = this.recipe.url;
    recipeRequest.votes = this.recipe.votes;
    recipeRequest.id = this.recipe.id;
    recipeRequest.user.email = this.storage.get('email')
    this.isEditing = false;
    this.recipeService.updateRecipe(recipeRequest)
    .subscribe( response => {
      this.router.navigate(['/healthy-food']);
    })
  }
  
  setToEditing(edit: boolean): void{
    this.isEditing = edit;
  }

  goBack(): void {
    this.router.navigate(['/healthy-food']);
  }
  
  ngOnDestroy(): void {
    if(this.data$){
      this.data$.unsubscribe();
    }
  }
  
  
}
