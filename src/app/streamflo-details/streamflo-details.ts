import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-streamflo-details',
  imports: [],
  templateUrl: './streamflo-details.html',
  styleUrl: './streamflo-details.css',
})
export class StreamfloDetails {
    protected readonly welcomeMessage = signal('Welcome to Ashlie After Hours');
}

