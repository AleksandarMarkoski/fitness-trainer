import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcercisesComponent } from './app-components/excercises/excercises.component';
import { ExperienceComponent } from './app-components/experience/experience.component';
import { ForumComponent } from './app-components/forum/forum.component';
import { HealthyFoodComponent } from './app-components/healthy-food/healthy-food.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExcerciseDetailsComponent } from './app-components/excercise-details/excercise-details.component';
import { HomeComponent } from './app-components/home/home.component';
import { AddExerciseComponent } from './app-components/add-exercise/add-exercise.component';
import { AddExperienceComponent } from './app-components/add-experience/add-experience.component';
import { AddForumPostComponent } from './app-components/add-forum-post/add-forum-post.component';
import { AddRecipeComponent } from './app-components/add-recipe/add-recipe.component';
import { LogInComponent } from './log-in/log-in.component';
import { RecipeDetailsComponent } from './app-components/recipe-details/recipe-details.component';
import { ExperienceDetailsComponent } from './app-components/experience-details/experience-details.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'excercises',
  component: ExcercisesComponent
},
{
  path: 'excercises/add-new',
  component: AddExerciseComponent
},
{
  path: 'experience',
  component: ExperienceComponent
},
{
  path: 'experience/add-new',
  component: AddExperienceComponent
},
{
  path: 'forum',
  component: ForumComponent
},
{
  path: 'forum/add-new',
  component: AddForumPostComponent
},
{
  path: 'healthy-food',
  component: HealthyFoodComponent
},
{
  path: 'healthy-food/add-new',
  component: AddRecipeComponent
},
{
  path: 'healthy-food/:id',
  component: RecipeDetailsComponent
},
{
  path: 'excercises/:id',
  component: ExcerciseDetailsComponent
},
{
  path: 'experience/:id',
  component: ExperienceDetailsComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'login',
  component: LogInComponent
},
{
  path: '**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
