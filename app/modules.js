if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        function sayIt(){
            return this.greeting + ', ' + this.name;
        }

        return {
            name: str2,
            greeting: str1,
            sayIt: sayIt
        };
    },
    sayIt: function(){
        return this.greeting + ', ' + this.name;
    }
  };
});

