/*global angular*/

angular.module('store-directives', []);

angular.module('store-directives').directive("descriptions", function () {
    "use strict";

    return {
        restrict: "E",
        templateUrl: "descriptions.html"
    };
});

angular.module('store-directives').directive("reviews", function () {
    "use strict";

    return {
        restrict: "E",
        templateUrl: "reviews.html"
    };
});

angular.module('store-directives').directive("specs", function () {
    "use strict";

    return {
        restrict: "E",
        templateUrl: "specs.html"
    };
});

angular.module('store-directives').directive("productTabs", function () {
    "use strict";

    return {
        restrict: "E",

        templateUrl: "product-tabs.html",
        controller: function ($scope) {
            $scope.tab = 1;

            $scope.isSet = function (checkTab) {
                return $scope.tab === checkTab;
            };

            $scope.setTab = function (activeTab) {
                $scope.tab = activeTab;
            };
        }
    };
});
