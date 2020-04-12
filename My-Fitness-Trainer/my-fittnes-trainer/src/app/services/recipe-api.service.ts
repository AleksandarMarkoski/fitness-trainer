import { Injectable } from '@angular/core';
import { RecipeRequest, RecipeUpdateRequest } from '../request/app.request';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipesResponse, RecipeResponse } from '../responses/app.responses';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  public url: string = 'http://localhost:8080/api/recipes';

  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<RecipesResponse>{
     return this.http.get<RecipesResponse>(this.url)
  }

  public getRecipeDetails(id: String): Observable<RecipeResponse>{
    return this.http.get<RecipeResponse>(`${this.url}/${id}`);
  }

  public createRecipe(exercise: RecipeRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/add-new`, exercise);
  }
  
  public updateRecipe(exercise: RecipeUpdateRequest): Observable<{ }> {
    return this.http.patch<{ }>(`${this.url}/update`, exercise);
  }

  public deteleRecipe(id: String): Observable<{ }> {
    return this.http.delete<{ }>(`${this.url}/delete/${id}`);
  }
}
