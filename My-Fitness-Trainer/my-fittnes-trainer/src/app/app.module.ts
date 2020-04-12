import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExcercisesComponent } from './app-components/excercises/excercises.component';
import { ExperienceComponent } from './app-components/experience/experience.component';
import { ForumComponent } from './app-components/forum/forum.component';
import { HealthyFoodComponent } from './app-components/healthy-food/healthy-food.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExcerciseCardComponent } from './app-components/excercise-card/excercise-card.component';
import { ExcerciseDetailsComponent } from './app-components/excercise-details/excercise-details.component';
import { RecipeCardComponent } from './app-components/recipe-card/recipe-card.component';
import { HomeComponent } from './app-components/home/home.component';
import { AddExerciseComponent } from './app-components/add-exercise/add-exercise.component';
import { AddExperienceComponent } from './app-components/add-experience/add-experience.component';
import { AddForumPostComponent } from './app-components/add-forum-post/add-forum-post.component';
import { AddRecipeComponent } from './app-components/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component'
import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ForumCardComponent } from './app-components/forum-card/forum-card.component';
import { RecipeDetailsComponent } from './app-components/recipe-details/recipe-details.component';
import { ExperienceCardComponent } from './app-components/experience-card/experience-card.component';
import { ExperienceDetailsComponent } from './app-components/experience-details/experience-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExcercisesComponent,
    ExperienceComponent,
    ForumComponent,
    HealthyFoodComponent,
    NotFoundComponent,
    ExcerciseCardComponent,
    ExcerciseDetailsComponent,
    RecipeCardComponent,
    HomeComponent,
    AddExerciseComponent,
    AddExperienceComponent,
    AddForumPostComponent,
    AddRecipeComponent,
    LogInComponent,
    ForumCardComponent,
    RecipeDetailsComponent,
    ExperienceCardComponent,
    ExperienceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
