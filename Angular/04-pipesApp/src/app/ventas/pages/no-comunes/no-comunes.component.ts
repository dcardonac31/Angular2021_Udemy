import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Laura';
  genero: string = 'femenino';

  invitacionMapa ={
    'masculino': 'invitado',
    'femenino': 'invitada',
  }

  cambiarCliente()
  {
    this.nombre = 'Andres';
    this.genero = 'masculino';
  }

  // i18nPlural
  clientes: string[] = ['Maria','Juan','Pedro','Francisco','Ernesto','Juana','Ivan','Mary Luz','David'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

eliminarCliente(){
  this.clientes.pop();
}

// KeyValue Pipe
persona = {
  nombre: 'David',
  edad: 30,
  direccion: 'Medellín, Colombia'
}

//JsonPipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  },
]

//Async Pipe
miObservable = interval(2000); //0,1,2,3,4,5,6,

valorPromesa = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve( 'Tenemos data de promesa');
  }, 3500);
});
}
