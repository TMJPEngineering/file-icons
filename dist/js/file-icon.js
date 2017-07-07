(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "//": "Excel Files",
  "application/vnd.oasis.opendocument.spreadsheet-template": "excel-file",
  "application/vnd.oasis.opendocument.spreadsheet": "excel-file",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel-file",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": "excel-file",
  "//": "Document Files",
  "application/msword": "word-file",
  "application/vnd.ms-word.document.macroenabled.12": "word-file",
  "application/vnd.oasis.opendocument.text": "word-file",
  "application/vnd.oasis.opendocument.text-template": "word-file",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "word-file",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "word-file",
  "//": "Power Point Files",
  "application/vnd.oasis.opendocument.presentation-template": "ppt-file",
  "application/vnd.oasis.opendocument.presentation": "ppt-file",
  "application/vnd.ms-powerpoint": "ppt-file",
  "application/vnd.ms-powerpoint.addin.macroenabled.12": "ppt-file",
  "application/vnd.ms-powerpoint.macroenabled.12": "ppt-file",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "ppt-file",
  "application/vnd.openxmlformats-officedocument.presentationml.slide": "ppt-file",
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "ppt-file",
  "application/vnd.openxmlformats-officedocument.presentationml.template": "ppt-file",
  "//": "PDF Files",
  "application/pdf": "pdf-file",
  "//": "Text Files",
  "text/plain": "text-file",
  "text/richtext": "text-file",
  "text/rtf": "text-file",
  "//": "Zip Files",
  "application/gzip": "zip-file",
  "application/zip": "zip-file",
  "application/x-zip-compressed": "zip-file",
  "application/x-rar-compressed": "zip-file",
  "//": "All images doesn't have icons since it can be displayed as icon",
  "image/jpeg": false,
  "image/gif": false,
  "image/png": false,
  "image/svg+xml": false,
  "image/x-icon": false,
  "image/x-ms-bmp": false,
  "image/bmp": false
}

},{}],2:[function(require,module,exports){
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

},{"./file-icons-class-db.json":1}]},{},[2]);
