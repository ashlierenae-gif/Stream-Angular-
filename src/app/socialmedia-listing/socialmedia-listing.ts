import { Component, inject, signal } from '@angular/core';
import { SocialMedia } from '../types/social-media.js';
import { SocialmediaOverview } from '../socialmedia-overview/socialmedia-overview';
import { SocialMediaService } from '../socialmedia.service';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-socialmedia-listing',
  imports: [SocialmediaOverview, RouterOutlet],
  templateUrl: './socialmedia-listing.html',
  styleUrl: './socialmedia-listing.css',
})
export class SocialmediaListing {
  socialMediaService: SocialMediaService = inject(SocialMediaService);
  socialMedia = signal<SocialMedia[]>([]);

  constructor() {
    this.socialMediaService.getSocialMedias()
    .then((socialMediaData)=> {
      this.socialMedia.set(socialMediaData);
    });
  }
}