import { Component, inject } from '@angular/core';
import { SocialMedia } from '../types/social-media';
import { SocialmediaOverview } from '../socialmedia-overview/socialmedia-overview';
import { SocialMediaService } from '../socialmedia.service';

@Component({
  selector: 'app-socialmedia-listing',
  imports: [SocialmediaOverview],
  templateUrl: './socialmedia-listing.html',
  styleUrl: './socialmedia-listing.css',
})
export class SocialmediaListing {
  socialMediaService: SocialMediaService = inject(SocialMediaService);
  socialMedia: SocialMedia[];

  constructor() {
    this.socialMedia = this.socialMediaService.getSocialMedias();
  }
}