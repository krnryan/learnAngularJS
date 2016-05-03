/*global angular*/
/*global $http*/

(function () {
    "use strict";

    var app = angular.module('gemStore', ['store-directives']);

    app.controller('GalleryController', function () {
        this.imageIndex = 0;
        this.setCurrent = function (imageNumber) {
            this.imageIndex = imageNumber || 0;
        };
    });

    app.controller('StoreController', [ '$http', function ($http) {
        var store = this;
        store.products = [];
        
        $http.get('json/products.json').success(function (data) {
            store.products = data;
        });
    }]);

    app.controller("ReviewController", function () {

        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

    });

})();
