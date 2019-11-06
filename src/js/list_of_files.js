const $ = require("jquery");
const fs = require("fs");

const path = require("path");
const openFile = require(path.join(__dirname, "/open_file.js"))

// Updates the list of files and adds click handlers to them
function update_file_list(pwd) {
    var mainDomObject = $("#main");
    var idOfList = "fileList";  // The HTML id to assign to the <ul> tag that contains the list of files.

    console.log("PWD:" + pwd);
    get_dir_list_html(pwd, idOfList, (list) => {
        // Change body's HTML to contents of list
        $( mainDomObject ).html(list);
        pwd = add_click_handlers_to_list(pwd, idOfList)
    });
}

function get_dir_list_html(dir, listId, callback) {
    fs.readdir(dir, (err, items) => {
            var list = create_html_list(items, listId, dir);
            callback(list);
    });
}

function create_html_list(files, listId, dir) {
    var upALevel = "";
    if (dir != "/") {
        upALevel = "<li>..</li>";
    }

    files = files.filter((item) => {return (item[0] != ".")});
    
    return `<ul id="${listId}">
                ${upALevel}
                <li>${files.join("</li><li>")}</li>
            </ul>`
}

function add_click_handlers_to_list(pwd, idOfList) {
    // $( "#fileList" ) returns a list of all with tag fileList [0] returns the first and only item
    // the <ul id="fileList"> .children returns a list of all it's members (all <li>)
    var list = $("#" + idOfList)[0].children;
    $.each(list, (index, item) => {
        item.onclick = () => {
            // Click handler
            var targetPath = path.join(pwd, item.innerHTML);

            try {
                // Returns a error if the path is unreadable
                fs.accessSync(targetPath, fs.R_OK)
            
                var targetStats = fs.lstatSync(targetPath);

                if (targetStats.isDirectory()) {
                    pwd = targetPath;
                    update_file_list(pwd)
                } else if (targetStats.isFile()) {
                    openFile(targetPath);
                } else {
                    display_error("Can't read that file type")
                }
            } catch(err) { display_error(err); }
        }
    });
    return pwd
}

function display_error(err) {
    alert(err);
}

module.exports = update_file_list;