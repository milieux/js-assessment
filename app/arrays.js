if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(memo, currentVal){
            return memo + currentVal;
        });
    },

    remove : function(arr, item) {
        return arr.filter(function(val){
            return val !== item;
        });

        // can't do this, will return undefined when if fails
        /*return arr.map(function(prev, current, index, newArr){
            if (current !== item) return current;
        });*/
    },

    removeWithoutCopy : function(arr, item) {
        //spent an hour doing this in normal forEach loop
        //HAVE TO RECURSE if the method used is splice
        //because the array being modified is the same
        //so when an item is removed the index changes as well
        function recurse(arr){
            arr.forEach(function(val, index){
                if (val === item){
                    arr.splice(index,1);
                    recurse(arr);
                }
            });
        }

        recurse(arr);

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
       return arr.filter(function(val){
            return val === item;
       }).length;
    },

    duplicates : function(arr) {
        var counts = arr.reduce(function(memo, current){
            if (memo.hasOwnProperty(current)){
                memo[current] += 1;
          } else {
                memo[current] = 1;
          }
          return memo;
        }, {});

        var dupes = [];
        for (var num in counts){
            if (counts.hasOwnProperty(num)){
                if (counts[num] > 1) {
                    dupes.push(Number(num));
                }
            }
        }
        return dupes;
    },

    square : function(arr) {
        return arr.map(function(val){
            return val*val;
        });
    },

    findAllOccurrences : function(arr, target) {
        var indexes = arr.map(function(val, index){
            if (val === target){
                return index;
            }
        });
        var pos = indexes.filter(function(val, index){
            if (val !== undefined){
                return true;
            }
        });

        return pos;
    }
  };
});
