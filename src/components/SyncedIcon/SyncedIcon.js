import React from 'react'
import styles from './SyncedIcon.module.css'
import CheckMarkIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import SyncIcon from '@material-ui/icons/Sync'

export default function SyncedIcon({ status }) {
  const icons = {
    'error': <ErrorIcon className={styles.red} />,
    'syncing': <SyncIcon className={styles.blue} />,
    'synced': <CheckMarkIcon className={styles.green} />
  }
  return icons[status]
}
  
