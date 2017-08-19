export default function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      template: '<div class="home">Bienvenido a nuestra tienda Online!</div>'
    })
    
    .state('productos', {
      url: '/productos',
      templateUrl: './routes/carrito/carrito.html'
    })  
    .state('contacto', {
      url: '/contacto',
      templateUrl: './routes/contacto/contacto.html'
    })
    .state('sobre', {
      url: '/sobre',
      template: '<sobre titulo="sobreCtrl.titulo"></sobre>'
    })        
}