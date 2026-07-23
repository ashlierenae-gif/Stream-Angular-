import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StreamfloDetails } from "./streamflo-details/streamflo-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StreamfloDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('streamflo-front');
}