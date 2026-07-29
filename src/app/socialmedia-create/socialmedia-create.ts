import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SocialMediaService } from '../socialmedia.service';
import { SocialMedia } from '../types/social-media';
import { Router } from '@angular/router';
@Component({
  selector: 'app-socialmedia-create',
  imports: [ReactiveFormsModule],
  templateUrl: './socialmedia-create.html',
  styleUrl: './socialmedia-create.css',
})
export class SocialmediaCreate {
  socialService: SocialMediaService = inject(SocialMediaService);
  router: Router = inject(Router);
  newPlatform: FormGroup;
  constructor() {
    this.newPlatform = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      imageURL: new FormControl(''),
      link: new FormControl(''),

    }
    )
  };

  async createPlatform(): Promise<void> {
    const newSocial: SocialMedia = {
      ...this.newPlatform.value
    };
    console.log('createPlatform');
    await this.socialService.createPlatform(newSocial);

    this.router.navigate(['']);
  }
}
