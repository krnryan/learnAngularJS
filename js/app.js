/*global angular*/

(function () {
    "use strict";

    var app = angular.module('store', []),
        gems = [
            {
                name: 'Dodecahedron',
                price: 2.95,
                description: 'This is a Dodecahedron!',
                canPurchase: true,
                soldOut: false
            },
            {
                name: 'Pentagonal Gem',
                price: 5.95,
                description: 'This is a Pentagonal Gem!',
                canPurchase: true,
                soldOut: false
            }
        ];

    app.controller('StoreController', function () {
        this.products = gems;
    });
})();
