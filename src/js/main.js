const $ = require("jquery");
const get_dir_list_html = require(__dirname + "/js/list_of_files.js");

var pwd = "/";

$( document ).ready(() => {
    var body = document.getElementById("main");
    $( body ).html("<h1>Hi</h1>");
    
    get_dir_list_html(pwd, "fileList", (list) => {
        $( body ).html(list);

        add_click_handlers()
    });
});

function add_click_handlers() {
    var list = $( "#main" )[0].children[0].children
    $.each(list, (index, item) => {
        item.onclick = () => {
            alert(item.innerHTML);
        }
    });
}