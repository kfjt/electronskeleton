import React from 'react';

const App: React.FC = () => {
    const handleClick = async () => {
        const response = await window.electronAPI.ping();
        console.log(response);
    }
  return (
    <div>
      <h1>Formeditor</h1>
        <button onClick={handleClick}>Ping main process</button>
    </div>
  );
};

export default App;