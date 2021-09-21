const fs = require('fs');

async function writeFile(data, filename) {

    fs.writeFile("./tmp/" + filename, data, err => {
        if (err) {
            console.error(err)
            return
        }
    });
}

async function readFile(filename) {
    
    let data = fs.readFileSync("./tmp/" + filename, 'utf8');
    
    const datajson = JSON.parse(data);
    
    return datajson.rows;
    
}

module.exports.writeFile = writeFile;

module.exports.readFile = readFile;
