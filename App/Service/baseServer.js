/**
 * Created by Nan on 2017/12/5.
 */
app.factory("baseConfig", function ($http, $q) {
    return {
        ajax: function (type, url, data) {
            var def = $q.defer();

            $http.get(url)
                .success(function (result) {
                    def.resolve(result);
                })
                .error(function (error) {
                    def.reject(error);
                });
            return def.promise;
        }
    }
});