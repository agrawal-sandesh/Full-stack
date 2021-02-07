const fs = require('fs');

fs.readFile('./demo.txt', 'utf8', (err, content) => {
    if (!err)
        console.log(content);
    else
        throw err;
});

console.log('After calling readFile');