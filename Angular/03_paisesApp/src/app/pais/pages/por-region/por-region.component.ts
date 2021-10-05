import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent {

  continents: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  continentActive: string = '';
  hayError: boolean = false;
  genericResponse: any;
  countries: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.continentActive) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarContinente( continentActive: string )  {
    this.hayError = false;
    if ( continentActive === this.continentActive ) { return; }
    this.continentActive = continentActive;
    this.countries = [];

    this.paisService.buscarContinente( this.continentActive )
      .subscribe( (countries) => {
        this.genericResponse  = countries;
        this.countries = countries;
        if (this.genericResponse.status == 404)
        {
          this.hayError = true;
          this.countries = []
          throw new Error("GET https://restcountries.com/v3/continent/" + this.continentActive+ " " +this.genericResponse.status+" ("+this.genericResponse.message+")");
        }
      }, (err) => {
        this.hayError = true;
        this.countries = []
        console.info(err);
      });

   }

}
