import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SocialMedia } from '../types/social-media';
import { SocialMediaService } from '../socialmedia.service';

@Component({
  selector: 'app-streamflo-details',
  imports: [RouterModule],
  templateUrl: './streamflo-details.html',
  styleUrl: './streamflo-details.css',
})
export class StreamfloDetails {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  socialMediaService: SocialMediaService = inject(SocialMediaService);
  socialMediaID: string;
  currentSocial = signal<SocialMedia>(this.socialMediaService.emptySocialMedia);


  constructor() {
    this.socialMediaID = this.route.snapshot.params['id'];
    this.socialMediaService.getSocialMediaById(this.socialMediaID)
      .then((socialMediaData) => {
        this.currentSocial.set(socialMediaData);
      });

  }
  async deletePlatform() {
    await this.socialMediaService.deletePlatform(this.socialMediaID);
    this.router.navigate(['']);
  }

}

