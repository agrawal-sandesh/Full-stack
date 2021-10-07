const fs = require('fs');
let fileWrite = () => {
    let str = "Hey, there";
    fs.writeFile('./log.txt', str + " At: " + new Date().getFullYear(),
        (err) => {
            if (!err)
                console.log('Data Written!');
            else
                throw err;
        })
}
fileWrite();