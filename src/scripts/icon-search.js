/**
 * Add properties to File instance to identify the class
 * use to search file icons by specified file
 * reference: https://github.com/jshttp/mime-db/blob/master/db.json
 */

'use strict';

var iconClass = require('./file-icons-class-db.json');

File.prototype.iconClass = function() {
    var type = this.type;
    // get the file class
    var fileClass = iconClass[type];
    // if undefined make the class a default
    if (fileClass == undefined)
        fileClass = 'default-file';

    return fileClass;
}
