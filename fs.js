// es module. (NEW)
import fs from 'fs';

// require statements. (OLD)
// var fs = require('fs');

// Read file and display its content.

/*
fs.readFile('main.js', 'utf8', (err, data) => {
    console.log(data);
});
*/

// Write file.

/*
var writeContent = 'console.log(\'Done!\')';
fs.writeFile('main2.js', writeContent, (err) => {
    console.log('Saved!');
});
*/

// Delete File.

fs.unlink('main2.js', (err) => {
    console.log('Deleted!');
});