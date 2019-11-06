const $ = require("jquery");

const path = require("path");
const os = require("os");

const update_file_list = require(path.join(__dirname, "/js/list_of_files.js"));

var pwd = os.homedir();

$( document ).ready(() => {
    // Setup the file list
        pwd = update_file_list(pwd);
});

