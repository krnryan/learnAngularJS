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
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});
