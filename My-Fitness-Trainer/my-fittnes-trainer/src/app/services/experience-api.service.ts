import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperiencesResponse, ExperienceResponse } from '../responses/app.responses';
import { ExperienceRequest, ExperienceUpdateRequest } from '../request/app.request';

@Injectable({
  providedIn: 'root'
})
export class ExperienceApiService {
  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  public url: string = 'http://localhost:8080/api/experiences';

  constructor(private http: HttpClient) { }

  public getAllExperiences(): Observable<ExperiencesResponse>{
     return this.http.get<ExperiencesResponse>(this.url)
  }

  public getExperiencesDetails(id: String): Observable<ExperienceResponse>{
    return this.http.get<ExperienceResponse>(`${this.url}/${id}`);
  }

  public createExperiences(experience: ExperienceRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/add-new`, experience);
  }
  
  public updateExperiences(experience: ExperienceUpdateRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/update`, experience);
  }

  public deteleExperiences(id: String): Observable<{ }> {
    return this.http.delete<{ }>(`${this.url}/delete/${id}`);
  }
}
