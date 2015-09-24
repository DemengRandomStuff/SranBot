'use strict';

global.document = window.document;

var fs = require('fs');
require("copy-paste").global();
var open = require('open');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ani'
});

connection.connect(function(err) {
    err ? console.error(err) : console.info('DB connected');
});

/*
Query example
connection.query("SELECT * FROM anime ORDER BY id DESC limit 1", function(err, row, fields) {
    if(err) {
        console.error(err);
        return;
    }
    console.log(row[0]);
});*/
