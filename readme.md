# 自定义指令
    app.directive("tab",function(){
        return {
            restract:"EACM"
        }
    });
    你可以通过以下方式来调用指令：
    元素名/属性/类名/注释 EACM
    restrict 值可以是以下几种:
        E 作为元素名使用
        A 作为属性使用
        C 作为类名使用
        M 作为注释使用
    默认是： EA