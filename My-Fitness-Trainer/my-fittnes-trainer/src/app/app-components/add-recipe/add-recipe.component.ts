import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { Router } from '@angular/router';
import { RecipeRequest, UserRequest, ForumPostRequest } from 'src/app/request/app.request';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  constructor( private recipeService: RecipeApiService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit(): void {
    if(!this.storage.get('admin')){
      this.router.navigate(['/login'])
    }
  }

  public AddThisForm(addForm: FormGroup){
    let recipeRequest = addForm.value;
    recipeRequest.user = new UserRequest;
    recipeRequest.votes = 0;
    recipeRequest.user.email = this.storage.get('email');

    this.recipeService.createRecipe(recipeRequest).subscribe(
      params=> {
        this.router.navigate(['/healthy-food']);
      }
    )
  }

  public goBack(): void{
    this.router.navigate(['/healthy-food']);
  }
}
