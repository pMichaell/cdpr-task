import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as os from 'os';
import { readdir, stat } from 'node:fs/promises';
import { DirContent } from '../globals';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    // Icon: path.resolve(__dirname + '/../assets/cdpr.webp'),
    // frame: false,
  });

  mainWindow.maximize();
  // MainWindow.setMenu(null);
  // mainWindow.setTitle('cdpr-task');
  // Load the index.html from an url
  mainWindow.loadURL('http://localhost:3000');
  // Open the DevTools.
  // win.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

ipcMain.on('paths', async (event, args: string[]) => {
  if (args.length === 0) {
    event.reply('paths', os.homedir());
  }
});

ipcMain.on('path-contents', async (event, args: string[]) => {
  if (args.length === 0) {
    return;
  }

  const receivedPath = args[0];
  if (receivedPath === '') {
    return;
  }

  console.log('received path ' + receivedPath);
  const contents: DirContent[] = [];

  try {
    const files = await readdir(receivedPath);
    for (const file of files) {
      const stats = await stat(path.join(receivedPath, file));
      contents.push({ name: file, type: stats.isFile() ? 'file' : 'dir' });
    }
  } catch (err) {
    console.error(err);
  }

  console.log(contents);

  event.reply('path-contents', contents);
});

ipcMain.on('file-system', async (event, args: string[]) => {
  console.log(args);
  event.reply('file-system', 'received');
});

// Console.log(path.resolve(__dirname + '/../assets/cdpr.ico'));

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
