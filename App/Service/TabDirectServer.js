/**
 * Created by Nan on 2017/12/5.
 */
app.factory("TabDirectServer", ["baseConfig", function (baseConfig) {

    return {
        getTabs: function () {
            return baseConfig.ajax("get", "./Data/data.json");
        }
    }
}]);