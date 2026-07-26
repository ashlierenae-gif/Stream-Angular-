import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SocialMedia } from '../types/social-media';
import { SocialMediaService } from '../socialmedia.service';

@Component({
  selector: 'app-streamflo-details',
  imports: [RouterModule],
  templateUrl: './streamflo-details.html',
  styleUrl: './streamflo-details.css',
})
export class StreamfloDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  socialMediaService: SocialMediaService=inject(SocialMediaService);
  socialMediaID: string;
  protected currentSocial: SocialMedia;


  constructor() {
    this.socialMediaID = this.route.snapshot.params['id'];
    this.currentSocial = this.socialMediaService.getSocialMediaById(this.socialMediaID);
  
  }


}

