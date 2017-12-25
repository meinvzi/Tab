app.controller("TabDirectController", ["$scope", "TabDirectServer", function ($scope, TabDirectServer) {

    TabDirectServer.getTabs()
        .then(function (result) {
            console.log(result);
            $scope.title = result.title;
            $scope.content = result.content;
        })
        .catch(function (error) {
            console.log(error);
        });
    $scope.changeTab = function ($index) {
        var uls = document.querySelectorAll("ul li");
        var ols = document.querySelectorAll("ol li");
        uls.forEach(function (item, index) {
            if (index == $index) {
                item.className = "active";
                ols[index].style.display = "block";
            } else {
                item.className = "";
                ols[index].style.display = "none";
            }
        });
    }
}]);