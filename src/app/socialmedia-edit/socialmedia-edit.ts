import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SocialMediaService } from '../socialmedia.service';
import { SocialMedia } from '../types/social-media';
@Component({
  selector: 'app-socialmedia-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './socialmedia-edit.html',
  styleUrl: './socialmedia-edit.css',
})
export class SocialmediaEdit {
  socialService: SocialMediaService = inject(SocialMediaService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  currentSocial = signal<SocialMedia>(this.socialService.emptySocialMedia);
  socialMediaID: string;
  newPlatform!: FormGroup;


  constructor() {
    this.socialMediaID = this.route.snapshot.params['id'];
    this.socialService.getSocialMediaById(this.socialMediaID)
      .then((socialMediaData) => {
        this.currentSocial.set(socialMediaData);

        this.newPlatform = new FormGroup({
          title: new FormControl(this.currentSocial().title),
          description: new FormControl(this.currentSocial().description),
          imageURL: new FormControl(this.currentSocial().imageURL),
          link: new FormControl(this.currentSocial().link),
        });

      })
  }

  async savePlatform(): Promise<void> {
    const updatedPlatform: SocialMedia = {
      id: this.currentSocial().id,
      ...this.newPlatform?.value
    };
    await this.socialService.updatePlatform(this.socialMediaID, updatedPlatform);

    this.router.navigate(['']);
  }
}