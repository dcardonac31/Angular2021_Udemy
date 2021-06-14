import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }


  //INYECCIÓN DE DEPENDENCIAS: Instanciar el servicio en el constructor
  constructor() {

  }

}
