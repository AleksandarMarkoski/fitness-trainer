import { Component, OnInit, Input } from '@angular/core';
import { ExperienceResponse } from 'src/app/responses/app.responses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: ExperienceResponse;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goToDetails(): void {
    this.router.navigate(['/experience',this.experience.id])
  }


}
