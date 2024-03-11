const { app, BrowserWindow } = require('electron');
const electronReload = require('electron-reload');
electronReload(__dirname)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 640,
    height: 480,
  });
  win.loadURL(`file://${__dirname}/html/index.html`)
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})