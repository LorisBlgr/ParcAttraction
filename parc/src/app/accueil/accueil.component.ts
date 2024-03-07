import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService, private critiqueService: CritiqueService, private router: Router) {}

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()

  public critiques: Observable<CritiqueInterface[]> = this.critiqueService.getAllCritique();

  navigateToCritiquesPage(attractionId: number): void {
    this.router.navigate(['/critiques', attractionId]);
  }
}
