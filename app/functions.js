if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var funcs = [];

        var func = function(x){
            return function(){
                return fn(x);
            };
        };

        for(var i = 0; i < arr.length; i++){
            funcs.push(func(arr[i]));
        }

        return funcs;
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2) + str3;
        };
    },

    useArguments : function() {
        var result = 0;

        Array.prototype.slice.call(arguments, 0).forEach(function(arg){
            result = result + arg;
        });

        return result;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments,1);
        return fn.apply(this, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function(){
            var args2 = Array.prototype.slice.call(arguments, 0);
            return fn.apply(this, args.concat(args2));
        };
    },

    curryIt : function(fn) {
        return function(a){
            return function(b){
                return function(c){
                    return fn(a, b, c);
                };
            };
        };
    }
  };
});
