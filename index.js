const electron = require("electron");
const isDev = require("electron-is-dev");

let win

function createWindow() {
    // Create the browser window
    let win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "/icon.jpg"
    });

    // Load index.html
    win.loadFile("src/index.html")

    if (isDev) {
        win.webContents.openDevTools()
    }
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

electron.app.on("ready", createWindow);

// Quit when all windows are closed.
electron.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      electron.app.quit()
    }
  })
  
  electron.app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })