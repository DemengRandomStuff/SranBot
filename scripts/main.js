'use strict';
//TODO create github
global.document = window.document;

var fs = require('fs');
require("copy-paste").global();
var open = require('open');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

connection.connect(function(err) {
    err ? console.error(err) : console.info('DB connected');
});