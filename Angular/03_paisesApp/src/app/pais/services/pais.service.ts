import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryAnthem, CountryAnthemResponse } from '../interfaces/country-anthem';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiCountryLayer: string = 'http://api.countrylayer.com/v2';
  private apiAccesKey: string = '?access_key=9ba7dbcd9c6cfedb6d0fa12b9a849c58';
  private apiRestCountriesV3: string = 'https://cors-anywhere.herokuapp.com/http://restcountries.com/v3';
  private apiRestCountriesV2: string = 'http://restcountries.com/v2';
  private apiCountryAnthem: string = 'https://countryanthem.azurewebsites.net/api/Anthems';
  private apiCountryPopulation: string = 'https://countryanthem.azurewebsites.net/api/Anthems/api/Populations';
  // private apiCountryAnthem: string = 'https://localhost:444/api/Anthems';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,alpha3Code,flag,population');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiRestCountriesV2 }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }

  buscarPais2( termino: string ): Observable<Country[]> {
    const url = `${ this.apiCountryLayer }/name/${ termino }${ this.apiAccesKey }`;
    return this.http.get<Country[]>( url );
  }


  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiRestCountriesV2 }/capital/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams}  );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiRestCountriesV2 }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  getCountryAnthem( id: string ): Observable<CountryAnthemResponse> {
    const url = `${ this.apiCountryAnthem }/${ id }`;
    return this.http.get<CountryAnthemResponse>( url );
  }

  buscarContinente( continent: string ): Observable<Country[]> {
    const url = `${ this.apiRestCountriesV2 }/continent/${ continent }`;
    return this.http.get<Country[]>( url, {params: this.httpParams}  );
  }

}

