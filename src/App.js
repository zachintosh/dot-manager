import React, { useState } from 'react';
import './App.css';
import DiscoveredFile from './components/DiscoveredFiles/DiscoveredFile/DiscoveredFile';
import DiscoveredFiles from './components/DiscoveredFiles/DiscoveredFiles'

import './firebase'

const { ipcRenderer } = window.require('electron')



function App() {

  const [discoveredFiles, setDiscoveredFiles] = useState([])

  ipcRenderer.on('files-discovered', (event, arg) => setDiscoveredFiles(arg))

  return (
    <div className="App">
      <DiscoveredFiles files={discoveredFiles} />
      {/* <div className="discovered-files">
        <div className="discovered-files-container">
          {Object.entries(discoveredFiles).map(([fileName, fileObj]) => (
            <DiscoveredFile key={fileName} fileName={fileName} fileObj={fileObj} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default App;
