const $ = require("jquery");
const get_files = require(__dirname + "/js/list_of_files.js");

$( document ).ready(() => {
    $( "#main" ).html("<h1>Hi</h1>");
    console.log(get_files(__dirname));
    console.log(typeof(get_files));
});