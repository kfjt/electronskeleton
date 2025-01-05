import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

const api = {
  versions: process.versions
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', {
      ping: () => ipcRenderer.invoke('ping')
    });
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  (window as any).electron = electronAPI;
  (window as any).api = api;
}
