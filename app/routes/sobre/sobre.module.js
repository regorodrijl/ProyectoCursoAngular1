var sobreComponent = require('./sobre.component');
var sobreEmpresaComponent = require('./empresa/empresa.component');

var sobre = angular.module('appTienda.sobre',[]);

sobre.component('sobre',sobreComponent.default);
sobre.component('sobreEmpresa',sobreEmpresaComponent.default);

sobre.controller('sobreCtrl', function($scope) {
    this.empresa ={
        nombre: 'Plexus',
        pais: 'España',
        img: '../../src/plx.png'
    };
});

export default sobre.name;