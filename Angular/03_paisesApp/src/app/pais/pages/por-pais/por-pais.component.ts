import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  genericResponse: any;
  countries: Country[] = [];
  countriesSugested: Country[] = [];
  showSugest: boolean = false;

  constructor( private paisService: PaisService ) { }

 buscar( termino: string )  {
  this.hayError = false;
  this.termino = termino;

  this.paisService.buscarPais( this.termino )
    .subscribe( (countries) => {
      this.genericResponse  = countries;
      this.countries = countries;
      if (this.genericResponse.status == 404)
      {
        this.hayError = true;
        this.countries = []
        throw new Error("GET https://restcountries.com/v2/name/" + this.termino+ " " +this.genericResponse.status+" ("+this.genericResponse.message+")");
      }
    }, (err) => {
      this.hayError = true;
      this.countries = []
      console.info(err);
    });

 }

 sugerencias( termino: string) {
   this.hayError = false;
   this.termino = termino;
   this.showSugest = true;

   this.paisService.buscarPais2( termino )
    .subscribe( countries => this.countriesSugested = countries.splice(0,5),
    (err) => this.countriesSugested = []);
 }

 buscarSugerido( termino: string ) {
    this.buscar( termino );
 }

}
