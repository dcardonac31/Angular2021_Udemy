import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'david';
  nombreUpper: string = 'david';
  nombreCompleto: string = 'daviD cArdOna';

  fecha : Date = new Date();

}
