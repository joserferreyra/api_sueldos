
var fs = require('fs'); 
var path = require('path');
var sprintf = require('printj').sprintf;

var XLSX = require('xlsx');
const repo = require('./repo.js');

function get_data(req, res, type) {
	var wb = make_book();
	/* send buffer back */
	res.status(200).send(XLSX.write(wb, {type:'buffer', bookType:type}));
}

function get_file(data) {
   
    //console.log(Object.values(data));
	var ws = XLSX.utils.json_to_sheet(data);
	var wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "SheetJS");    
        
	/* write using XLSX.writeFile */
	//XLSX.writeFile(wb, "testjson2.xlsx");
    var buf = XLSX.write(wb, {type:'buffer', bookType: "xlsx"});
    return buf;
	/* send to client */
	//res.status(200).send(buf);
    //res.status(200).send(XLSX.write(wb, {type:'buffer', bookType:type}));
    
}

function load_data(file) {
	var wb = XLSX.readFile(file);
	/* generate array of arrays */
	data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
	console.log(data);
}

function post_data(req, res) {
	var keys = Object.keys(req.files), k = keys[0];
	load_data(req.files[k].path);
	res.status(200).send("ok\n");
}

function post_file(req, res, file) {
	load_data(file);
	res.status(200).send("ok\n");
}

module.exports.get_data = get_data;
module.exports.get_file = get_file;