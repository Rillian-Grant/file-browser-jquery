function getCommandLine() {
    switch(process.platform) {
      case 'darwin' :
        return 'open';
      default:
        return 'xdg-open';
    }
 }

 module.exports = function(file) {
      /^win/.test(process.platform) ? 
          require("child_process").exec('start "" "' + file + '"') :
          require("child_process").spawn(getCommandLine(), [file],
               {detached: true, stdio: 'ignore'}).unref(); 
 }