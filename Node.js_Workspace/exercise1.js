const fs = require('fs');
let logUser = (username) => {
    fs.readFile('./names.txt', 'utf8', (err, content) => {
            if (!err) {
                let names = content.split(",");
                if (names.indexOf(username) == -1) {
                    fs.appendFile('./names.txt', "," + username, (err) => {
                        if (!err) {
                            console.log(username + " has been added successfully");
                        } else {
                            throw err;
                        }
                    })

                } else {
                    console.log("User already exists");
                }
            } else {
                console.log(err);
            }
        }

    )
};
logUser("Sandesh");