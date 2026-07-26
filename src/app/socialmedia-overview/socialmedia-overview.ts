import { input, Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SocialMedia } from '../types/social-media';


@Component({
  selector: 'app-socialmedia-overview',
  imports: [RouterModule],
  templateUrl: './socialmedia-overview.html',
  styleUrl: './socialmedia-overview.css',
})
export class SocialmediaOverview {
  currentSocial = input.required<SocialMedia>();
}
