const fs = require('fs');

function writeFile(data, filename) {

    fs.writeFile("./tmp/" + filename, data, err => {
        if (err) {
            console.error(err)
            return
        }
    });
}

function readFile(filename) {

    fs.readFile(filename, 'utf8', (err, content) => {
        if (err) {
            console.error(err)
            return
        };
        const data = JSON.parse(content);
        return data;
    });
    
}

module.exports.writeFile = writeFile;

module.exports.readFile = readFile;
