import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly endpoint = `${environment.apiUrl}cars`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.endpoint);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.endpoint}/${id}`);
  }

  update(car:Car): Observable<Car>{
    return this.http.patch<Car>(`${this.endpoint}/${car.id}`, car);
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.endpoint, car);
  }

  delete(car:Car): Observable<Car>{
    return this.http.delete<any>(`${this.endpoint}/${car.id}`);
  }

}
