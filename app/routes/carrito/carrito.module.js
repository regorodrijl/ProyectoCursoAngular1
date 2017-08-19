var carritoComponent = require('./carrito.component');
var productoComponent = require('./producto/producto.component');

var carrito = angular.module('appTienda.carrito', []);


carrito.component('carrito', carritoComponent.default);
carrito.component('producto', productoComponent.default);

var total=0;

carrito.controller('carritoCtrl', function ($scope) {
    this.busqueda = { value: "" };
    this.tot= total;
    this.callback = function () {
        console.log(this.busqueda.value);
    };
    this.sumar = function () {
        total += 1;
        console.log("hay:" , total, typeof total);
        this.tot= total;
    };
    this.restar = function () {
        if(total==0){
            
            console.log("No se puede restar mas!");
        }else{
            total -= 1;
            console.log("hay:" + total + typeof total);
            this.tot= total;
        } 
    };
});

export default carrito.name;