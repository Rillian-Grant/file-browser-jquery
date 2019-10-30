const fs = require("fs");

function get_dir_list_html(dir, listId, callback) {
    fs.readdir(dir, (err, items) => {
        var list = create_html_list(items, listId);

        callback(list);
    });
}

function create_html_list(files, listId) {
    //     | <ul id="__listId__"><li> |
    return "<ul id=" + listId + "><li>" + files.join("</li><li>") + "</li></ul>"
}

module.exports = get_dir_list_html;