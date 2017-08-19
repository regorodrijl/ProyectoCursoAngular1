var config = require('./app.config');

require('./routes/carrito/carrito.module');
require('./routes/sobre/sobre.module');
//require('./routes/contacto/contacto.component');

angular.module('appTienda',['ui.router','oc.lazyLoad','appTienda.carrito','appTienda.sobre'])
    .config(config.default);

function component() {
	var element = document.createElement('div');

    element.innerHTML = 
	    '<app></app>';

    return element;
}

document.body.appendChild(component());
