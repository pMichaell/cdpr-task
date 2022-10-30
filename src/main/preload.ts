import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'file-system';

contextBridge.exposeInMainWorld('api', {
  sendMessage(channel: Channels, args: string[]) {
    ipcRenderer.send(channel, args);
  },
  on(channel: Channels, func: (...args: string[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: string[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  once(channel: Channels, func: (...args: string[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args));
  },
});
