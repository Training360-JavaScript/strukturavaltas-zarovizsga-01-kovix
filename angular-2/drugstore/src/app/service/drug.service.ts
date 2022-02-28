import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  readonly endpoint: string = 'drugs';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${environment.apiUrl}${this.endpoint}`);
  }
}
