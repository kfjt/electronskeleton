import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';

const App = (): JSX.Element => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <h1>Formeditor</h1>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  );
};

export default App;
