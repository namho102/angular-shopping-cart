'use strict';

var app = angular.module('shoppingCart', [
  'cart',
  'checkout',
  'ngNewRouter']);

app.controller('AppController', function($router) {
  $router.config([
    { path: '/', redirectTo: '/cart' },
    { path: '/cart', component: 'cart' },
    { path: '/checkout', component: 'checkout' }
  ]);
})
