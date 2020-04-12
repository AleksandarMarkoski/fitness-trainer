import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObservedValueOf, Observable } from 'rxjs';
import { ExercisesResponse, ExerciseResponse } from '../responses/app.responses';
import { ExerciseRequest, ExerciseUpdateRequest } from '../request/app.request';

@Injectable({
  providedIn: 'root'
})
export class ExerciseApiService {
  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  public url: string = 'http://localhost:8080/api/exercises';

  constructor(private http: HttpClient) { }

  public getAllExercises(): Observable<ExercisesResponse>{
     return this.http.get<ExercisesResponse>(this.url)
  }

  public getExerciseDetails(id: String): Observable<ExerciseResponse>{
    return this.http.get<ExerciseResponse>(`${this.url}/${id}`);
  }

  public createExercise(exercise: ExerciseRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/add-new`, exercise, { headers: this.httpHeaders});
  }
  
  public updateExercise(exercise: ExerciseUpdateRequest): Observable<{ }> {
    return this.http.patch<{ }>(`${this.url}/update`, JSON.stringify(exercise),{ headers: this.httpHeaders});
  }

  public deteleExercise(id: String): Observable<{ }> {
    return this.http.delete<{ }>(`${this.url}/delete/${id}`);
  }
}
