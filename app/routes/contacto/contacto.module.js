var contactoComponent = require('./contacto.component');

var contacto = angular.module('appTienda.contacto',[]);


contacto.component('contacto',contactoComponent.default);

export default contacto.name;


catalogo.directive('validador', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function validacion(valor) {
                console.log("validando", element, "VALOR:" + valor);
                switch (element[0].name) {
                    case "email":
                        console.log("validar email");
                        var result = validateEmail(valor);
                        console.log(result);
                        break;
                    default:
                        console.log("no validar", );
                }
                // if (valor > 0) {
                //     mCtrl.$setValidity('charE', true);
                // } else {
                //     mCtrl.$setValidity('charE', false);
                // }
                // return valor;
            }
            mCtrl.$parsers.push(validacion);
        }
    }
});

// FUNCIONES PROPIAS
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}