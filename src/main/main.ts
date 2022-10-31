import { app, BrowserWindow, ipcMain, shell } from 'electron';
import * as path from 'path';
import * as os from 'os';
import { retrieveDirectoryContents } from './handlers';

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
    return;
  }

  const firstPathSegment = args[0];

  if (firstPathSegment.toLowerCase() === 'homedir') {
    event.reply('paths', os.homedir());
    return;
  }

  let newPath = firstPathSegment;

  if (!newPath.includes(os.homedir())) {
    newPath = path.join(os.homedir(), newPath);
  }

  event.reply('paths', newPath);
});

ipcMain.on('directory-contents', async (event, args: string[]) => {
  if (args.length === 0) {
    return;
  }

  const receivedPath = args[0];

  if (receivedPath === 'homedir') {
    const homedirContents = await retrieveDirectoryContents(os.homedir());
    console.log(homedirContents);
    event.reply('directory-contents', homedirContents);
    return;
  }

  const contents = await retrieveDirectoryContents(receivedPath);

  event.reply('directory-contents', contents);
});

ipcMain.on('file-handle', async (event, args: string[]) => {
  await shell.openPath(args[0]);
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
