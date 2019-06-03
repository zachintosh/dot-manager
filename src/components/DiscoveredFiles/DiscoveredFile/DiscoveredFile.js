import React from 'react'
import styles from './DiscoveredFile.module.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SyncedIcon from '../../SyncedIcon/SyncedIcon'

export default function DiscoveredFile({ fileName, fileObj }) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={styles.grid}>
          <div className={styles.iconContainer}>
            {fileObj.icon && <img className={styles.icon} alt="icon" src={`assets/${fileObj.icon}`} />}
          </div>
          <span className={styles.fileTitle}>{fileName}</span>
          <span className={styles.fileName}>{fileObj.fileName}</span>
          <div className={styles.iconContainer}>
            <SyncedIcon status="synced" />
          </div>
        </div>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {fileObj.path}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
  
{/* 
    // <div className={styles.grid}>
    //   <div className={styles.iconContainer}>
    //     {fileObj.icon && <img className={styles.icon} alt="icon" src={`assets/${fileObj.icon}`} />}
    //   </div>
    //   <span className={styles.fileTitle}>{fileName}</span>
    //   <span className={styles.fileName}>{fileObj.fileName}</span>
    // </div> */}