function Animal(animalType){
  this.type = `es de tipo: ${animalType}`;
  this.saludar = () => `Hola soy un animal de tipo ${animalType}`;
}

function Caballo(type, name)
{
  Animal.call(this,type);
  this.name = name
}

Caballo.prototype = Object.create(Animal.prototype);

console.log(new Caballo('caballuno','caballo').saludar());