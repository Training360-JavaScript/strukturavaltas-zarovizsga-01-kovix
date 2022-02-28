import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  readonly endpoint = `${environment.apiUrl}constructions`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.endpoint);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.endpoint}/${id}`);
  }

  update(construction:Construction): Observable<Construction>{
    return this.http.patch<Construction>(`${this.endpoint}/${construction.id}`, construction);
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(this.endpoint, construction);
  }

  delete(construction:Construction): Observable<Construction>{
    return this.http.delete<any>(`${this.endpoint}/${construction.id}`);
  }

}
