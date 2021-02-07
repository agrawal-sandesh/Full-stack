let fs = require('fs');
fs.readFile('./data/names.txt', 'utf8', (err, content) => {
    if (!err) {
        let names = content;
        let nameArray = names.split(', ').sort().reverse();
        let sortedNames = nameArray.join(', ');
        fs.writeFile('./sortedData/sortedData.txt', sortedNames, (err) => {
            if (!err) {
                console.log("Data submitted in sortedData.txt file");
            } else {
                console.log(err);
            }
        })
    } else {
        throw err;
    }
})