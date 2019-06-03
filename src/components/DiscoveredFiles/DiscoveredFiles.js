import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './DiscoveredFiles.module.css'
import DiscoveredFile from './DiscoveredFile/DiscoveredFile'

export default function DiscoveredFiles({ files }) {
  return (
    <div className={styles.container}>
      <h2>Settings Files</h2>
      {Object.entries(files).map(([fileName, fileObj]) => (
        <DiscoveredFile key={fileName} fileName={fileName} fileObj={fileObj} />
      ))}
    </div>
  );
}
  
