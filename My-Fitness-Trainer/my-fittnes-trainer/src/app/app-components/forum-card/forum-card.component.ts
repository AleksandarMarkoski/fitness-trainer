import { Component, OnInit, Input } from '@angular/core';
import { ForumPostResponse } from 'src/app/responses/app.responses';

@Component({
  selector: 'app-forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.css']
})
export class ForumCardComponent implements OnInit {


  @Input() public forumResponse: ForumPostResponse;

  constructor() { }

  ngOnInit(): void { }

  goToDetails(): void {

  }

}
