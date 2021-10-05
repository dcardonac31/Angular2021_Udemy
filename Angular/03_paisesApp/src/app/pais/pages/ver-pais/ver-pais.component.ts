import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';
import { CountryAnthemResponse } from '../../interfaces/country-anthem';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  country!: Country;
  countryAnthemResponse!: CountryAnthemResponse;
  dataVisible: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( param ) => this.paisService.getPaisPorAlpha( param.id ) ),
        tap( console.log )
      )
      .subscribe( country => this.country = country);

      this.activatedRoute.params
      .pipe(
        switchMap( ( param ) => this.paisService.getCountryAnthem( param.id ) ),
        tap( console.log )
      )
      .subscribe( countryAnthemResponse => this.countryAnthemResponse = countryAnthemResponse);
  }

}
