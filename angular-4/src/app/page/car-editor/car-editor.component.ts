import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  carData$: Observable<Car> = this.activatedRoute.params.pipe(
    switchMap(params => this.carService.get(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private carService: CarService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(car: Car) {
    this.carService.update(car).forEach(response => {
      this.router.navigate(['/car']);
    });
  }

}
