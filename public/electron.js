const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const isDev = require('electron-is-dev')

let win

createWindow = () => {
    let {
        width,
        height
    } = require('electron').screen.getPrimaryDisplay().size
    win = new BrowserWindow({
        width,
        height,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.on('closed', () => {
        win = null
    })
    win.loadURL(isDev ? `http://localhost:3001` : `file://${path.join(__dirname, '../build/index.html')}`)
    win.webContents.openDevTools()
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  })