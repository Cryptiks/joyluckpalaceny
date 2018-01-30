angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'partials/menu.html'
      })
      .state('press', {
        url: '/press',
        templateUrl: 'partials/press.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'partials/gallery.html'
      })
  }]);
