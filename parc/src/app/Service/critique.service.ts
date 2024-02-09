import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class CritiqueService {
  constructor(private dataService: DataService) {

  }

  public getAllCritique() : Observable<CritiqueInterface[]> {
    const url = "http://127.0.0.1:5000/critique"
    const data = this.dataService.getData(url);
    return data as Observable<CritiqueInterface[]>;
  }

  public postCritique(attraction: CritiqueInterface): Observable<MessageInterface> {
    const url = "http://127.0.0.1:5000/critique";
    const data = this.dataService.postData(url, attraction);
    return data as Observable<MessageInterface>;
  }
}
