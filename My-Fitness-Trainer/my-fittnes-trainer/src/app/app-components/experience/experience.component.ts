import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ExperiencesResponse } from 'src/app/responses/app.responses';
import { Subscription } from 'rxjs';
import { ExperienceApiService } from 'src/app/services/experience-api.service';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  public experienceResponse: ExperiencesResponse;
  public data$: Subscription;
  constructor(
    private experienceApiService: ExperienceApiService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit(): void {
    this.data$ = this.experienceApiService.getAllExperiences()
    .subscribe({
      next: result=> {
          this.experienceResponse = result;
      },
      error: error => {
        console.log(error.error);
        
      }
    })
  }

  public goToAddPage(): void {
    this.router.navigate(['/experience', 'add-new']);
  }


  ngOnDestroy(): void {
    if(this.data$){
      this.data$.unsubscribe();
    }
  }

}
