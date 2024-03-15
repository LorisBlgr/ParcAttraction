import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CritiqueService } from '../Service/critique.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-critiques-page',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './critiques-page.component.html',
  styleUrl: './critiques-page.component.scss'
})

export class CritiquesPageComponent {
  critiques: any;
  attraction: AttractionInterface | null = null;
  attractions: Observable<AttractionInterface[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private critiqueService: CritiqueService,
    private attractionService: AttractionService
  ) {
    this.route.params.subscribe(params => {
      const attractionId = params['id'];
      if (attractionId == null) {
        this.loadAllCritiques();
      } else {
        this.loadCritiques(attractionId);
        this.loadAttraction(attractionId);
      }
    });
  }

  ngOnInit(): void {
    this.attractions = this.attractionService.getAllAttraction().pipe(
      map(attractions => attractions.filter(attraction => attraction.visible))
    );
  }

  loadCritiques(attractionId: number | null): void {
    if (attractionId !== null) {
      this.attractionService.getAttractionById(attractionId).subscribe(attraction => {
        if (attraction && attraction.visible) {
          this.critiques = this.critiqueService.getCritiquesByAttractionId(attractionId);
        } else {
          this.critiques = []; // No critiques to display if the attraction is not visible
        }
      });
    }
  }

  loadAllCritiques(): void {
    this.critiques = this.critiqueService.getAllCritique();
  }

  loadAttraction(attractionId: number | null): void {
    if (attractionId == null) {
      this.attraction = null;
    } else {
      this.attractionService.getAttractionById(attractionId).subscribe(attraction => {
        this.attraction = attraction;
      });
    }
  }
}
