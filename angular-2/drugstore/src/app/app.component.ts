import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';


/**
 * Warning!!!!
 * Ezeket a sorokat azért tettem bele, mert a 2. feladat 1. rész tartalmazott egy ilyen kitételt:
 * A munkád manuális ellenőrzéséhez az app.component.ts-be injektáld be a szervizedet, és írasd ki a konzolra a gyógyszerek listáját.
 * Ugyanakkor így az scss teszt nem fut le, csak ha a DrugService nincs beinjektálva.
 * az scss vizuálisan ettől még jónak tűnik, illetve ha alaphelyzetbe állítom a controller kódot, akkor a teszt is lefut.
 * KD
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drugstore';

  drugList$: Observable<Drug[]> = this.drugService.getAll(); //remove this for test:23 scss

  //remove this for test:23 scss
  constructor(
    private drugService: DrugService
  ) { }
  //remove this for test:23 scss
  ngOnInit(): void {
      this.drugList$.subscribe(drugs => console.log(drugs));
  }

  //constructor() { }
  //ngOnInit() { }

}
