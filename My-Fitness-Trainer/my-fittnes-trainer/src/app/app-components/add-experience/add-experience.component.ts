import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, ValidatorFn, FormBuilder } from '@angular/forms';
import { ExperienceApiService } from 'src/app/services/experience-api.service';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { UserRequest, ExperienceRequest, RecipeUpdateRequest } from 'src/app/request/app.request';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  form: FormGroup;
  ordersData = [];
  public experienceRequest: ExperienceRequest;

  
  constructor(
    private experienceApiService: ExperienceApiService,
    private recipeApiService: RecipeApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { 
      this.form = this.formBuilder.group({
        orders: new FormArray([], minSelectedCheckboxes(1))
      });
    }

  ngOnInit(): void {
    this.experienceRequest = new ExperienceRequest;
    this.recipeApiService.getAllRecipes()
    .subscribe({
      next: result => {
        if(result){
         result.forEach(recipe => {
              this.ordersData.push({
                id: recipe.id,
                name: recipe.title
              })
            });
        this.addCheckboxes()
      }
    }
    })
  }

  private addCheckboxes() {
    console.log(this.ordersData)
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.ordersData[i].id : null)
      .filter(v => v !== null);
      this.experienceRequest.recipes = [];
      selectedOrderIds.forEach(element => {
        this.experienceRequest.recipes.push(new RecipeUpdateRequest);
      });
      let i = 0;
      selectedOrderIds.forEach(element => {
        this.experienceRequest.recipes[i].id = element;
        i++;
      });


    
  }


  public AddThisForm(addForm: FormGroup): void{
    this.experienceRequest.user = new UserRequest;
    this.experienceRequest.title = addForm.value.title;
    this.experienceRequest.description = addForm.value.description;
    this.experienceRequest.url = addForm.value.url;
    this.experienceRequest.user.email = this.storage.get('email');
    this.experienceApiService.createExperiences(this.experienceRequest).subscribe(
      result=> {
        this.router.navigate(['/experience'])
        
      }
    )
  }

  goBack(): void{
    this.router.navigate(['/experience'])
  }
}


function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}

