const fs = require("fs");

function get_files(dir) {
    fs.readdir("/", (err, items) => {
        console.log(items);

    });
}

module.exports = get_files;