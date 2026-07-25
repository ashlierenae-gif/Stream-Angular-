import { Component, signal } from '@angular/core';
import { socialMediaList } from '../mock-data/mock-socials';

@Component({
  selector: 'app-streamflo-details',
  imports: [],
  templateUrl: './streamflo-details.html',
  styleUrl: './streamflo-details.css',
})
export class StreamfloDetails {
  protected readonly welcomeMessage = signal('Welcome to Ashlie After Hours');

  protected readonly currentSocial = socialMediaList;
}

