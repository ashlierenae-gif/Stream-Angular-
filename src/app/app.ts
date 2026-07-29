import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StreamfloDetails } from "./streamflo-details/streamflo-details";
import { SocialmediaListing } from './socialmedia-listing/socialmedia-listing';
import { SocialmediaOverview } from './socialmedia-overview/socialmedia-overview';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('streamflo-front');
}