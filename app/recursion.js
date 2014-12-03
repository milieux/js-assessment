if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var files = [];

        function findFiles(data, dirName){
            console.log('dir', dirName);
            data.files.forEach(function(file){
                if (typeof file === 'string') {
                    if (data.dir === dirName) files.push(file);
                }
                if (file.files){
                    findFiles(file, file.dir);
                }
            });

        }

        if (!dirName) dirName = data.dir;

        findFiles(data, dirName);

        console.log(files);

        return files;
    },

    permute: function(arr) {

    }
  };
});
