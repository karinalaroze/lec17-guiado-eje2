
 var productos =[
 {
 	nombre: 'pijama',
 	tipo: 'ropa'
 },
  {
  	nombre: 'nevera',
  	tipo: 'electrodoméstico'
  },
  {
  	nombre: 'asus',
  	tipo: 'computador'
  },
  {
  	nombre: 'macbook',
  	tipo: 'computador'
  },
  {
  	nombre: 'pijama',
  	tipo: 'ropa'
  },
  {
  	nombre: 'toshiba', tipo: 'computador'
  }
 ];

 //forma imperativa 

 var computadore = [];
 for(var i = 0; i < productos.length; i++){
  if (productos[i].tipo === 'computador') {
    computadore.push(productos[i]);
  }
 }

 //forma con metodo filter

 var computadores = productos.filter(function(producto){
  return producto.tipo === 'computador';
 }); 
 
