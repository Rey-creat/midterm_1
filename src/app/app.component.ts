import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayquotesComponent,TodolistComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'its320Frontend-rico';
}
