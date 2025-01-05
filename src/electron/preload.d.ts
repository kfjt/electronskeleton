import { ElectronAPI } from '@electron-toolkit/preload';

interface Versions {
  node: string;
  chrome: string;
  electron: string;
}

interface IElectronAPI {
  ping: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
    electron: ElectronAPI;
    api: { versions: Versions };
  }
}
