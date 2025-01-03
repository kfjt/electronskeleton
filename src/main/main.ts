import { app, BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import path from 'path';

// __dirname の修正 (ESM環境で必要)
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const isDevelopment = process.env.NODE_ENV === 'development';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  ipcMain.handle('ping', async (event: IpcMainEvent) => {
    return 'pong';
  });

  if (isDevelopment) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html')); // rendererのindex.htmlをロード
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
