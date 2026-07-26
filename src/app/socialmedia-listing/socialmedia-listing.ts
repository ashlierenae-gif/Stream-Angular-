import { Component } from '@angular/core';
import { SocialMedia } from '../types/social-media';
import { socialMediaList } from '../mock-data/mock-socials';
import { SocialmediaOverview } from '../socialmedia-overview/socialmedia-overview';

@Component({
  selector: 'app-socialmedia-listing',
  imports: [SocialmediaOverview],
  templateUrl: './socialmedia-listing.html',
  styleUrl: './socialmedia-listing.css',
})
export class SocialmediaListing {
  socialMedia: SocialMedia[] = socialMediaList;
}
