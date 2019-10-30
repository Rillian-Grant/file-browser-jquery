const $ = require("jquery");
const get_dir_list_html = require(__dirname + "/js/list_of_files.js");

var pwd = "/";

$( document ).ready(() => {
    // Update
    var body = document.getElementById("main");
    $( body ).html("<h1>Hi</h1>");
    
    get_dir_list_html(pwd, "fileList", (list) => {
        // Change body's HTML to contents of list
        $( body ).html(list);

        add_click_handlers_to_list()
    });
});

function add_click_handlers_to_list() {
    // $( "#fileList" ) returns a list of all with tag fileList [0] returns the first and only item
    // the <ul id="fileList"> .children returns a list of all it's members (all <li>) 
    var list = $( "#fileList" )[0].children
    $.each(list, (index, item) => {
        item.onclick = () => {
            // Alert with the item's text
            alert(item.innerHTML);
        }
    });
}