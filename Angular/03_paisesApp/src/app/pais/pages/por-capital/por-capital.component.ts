import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  genericResponse: any;
  countries: Country[] = [];

  constructor( private paisService: PaisService ) { }

 buscar( termino: string )  {
  this.hayError = false;
  this.termino = termino;

  this.paisService.buscarCapital( this.termino )
    .subscribe( (countries) => {
      this.genericResponse  = countries;
      this.countries = countries;
      if (this.genericResponse.status == 404)
      {
        this.hayError = true;
        this.countries = []
        throw new Error("GET https://restcountries.com/v2/capital/" + this.termino+ " " +this.genericResponse.status+" ("+this.genericResponse.message+")");
      }
    }, (err) => {
      this.hayError = true;
      this.countries = []
      console.info(err);
    });

 }

 sugerencias( termino: string) {
   this.hayError = false;
  //TODO: Crear sugerencias
 }
}
