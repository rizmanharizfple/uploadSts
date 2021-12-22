const fs = require('fs');
const credentials = require('./credentials.json');

let files = fs.readdirSync('./uploadFolder');

if (files.length === 0){
    console.log('Did not find any file to upload');
    process.exit();
};

if (files.length > 1){
    console.log('Found more than one file');
    process.exit();
};