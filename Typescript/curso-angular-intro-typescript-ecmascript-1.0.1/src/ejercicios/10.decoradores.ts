function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}


@ClassDecorator
class MiSuperCLase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
      console.log('Hola Angular ¡A!')
  }
}

console.log( MiSuperCLase );

const miClase = new MiSuperCLase();

console.log( miClase.miPropiedad );