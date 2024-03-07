import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CritiqueService } from '../Service/critique.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';

@Component({
  selector: 'app-critiques-page',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './critiques-page.component.html',
  styleUrl: './critiques-page.component.scss'
})

export class CritiquesPageComponent {
  critiques: any;
  attraction: AttractionInterface | null = null; // Declare the 'attraction' property

  constructor(private route: ActivatedRoute, private critiqueService: CritiqueService, private attractionService: AttractionService) {
    this.route.params.subscribe(params => {
      const attractionId = params['id'];
      this.loadCritiques(attractionId);
      this.loadAttraction(attractionId);
    });
  }

  loadCritiques(attractionId: number | null): void {
    if (attractionId !== null) {
      this.critiques = this.critiqueService.getCritiquesByAttractionId(attractionId);
    }
  }

  loadAttraction(attractionId: number | null): void {
    if (attractionId !== null) {
      this.attractionService.getAttractionById(attractionId).subscribe(attraction => {
        this.attraction = attraction;
      });
    }
  }
}
