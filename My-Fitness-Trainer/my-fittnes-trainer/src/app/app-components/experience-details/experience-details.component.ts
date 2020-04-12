import { Component, OnInit } from '@angular/core';
import { ExperienceApiService } from 'src/app/services/experience-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceResponse } from 'src/app/responses/app.responses';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  public experience: ExperienceResponse;
  public data$: Subscription;
  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data$ = this.experienceService.getExperiencesDetails(this.route.snapshot.params['id'])
    .subscribe({
      next: result => {
        this.experience = result;
      },
      error: error=>{
        console.log(error.error);
        
      }
    })
  }

}
