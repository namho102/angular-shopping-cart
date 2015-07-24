'use strict';

/*
angular.module('shoppingCart', [
    'ngNewRouter',
    'cart',
    'checkout'
]).controller('AppCtrl', ['$router', AppCtrl]);
*/

var app = angular.module('shoppingCart', [
  'cart',
  'checkout',
  'ngNewRouter']);

// app.controller('AppController', function($router) {
//   $router.config([
//     { path: '/', redirectTo: '/cart' },
//     { path: '/cart', component: {main: 'cart'} },
//     { path: '/checkout', component: {main: 'checkout'} }
//   ]);
// })

app.controller('AppController', function($router) {
  $router.config([
    { path: '/', redirectTo: '/cart' },
    { path: '/cart', component: 'cart' },
    { path: '/checkout', component: 'checkout' }
  ]);
})
