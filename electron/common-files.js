module.exports =  {
  'Bash Config': {
    path: {
      windows: `${process.env.HOME}/.bashrc`,
      mac: `${process.env.HOME}/.bashrc`,
      linux: `${process.env.HOME}/.bashrc`
    },
    language: 'bash',
    icon: 'bash-icon.svg'
  },
  'Bash Profile': {
    path: {
      windows: `${process.env.HOME}/.bash_profile`,
      mac: `${process.env.HOME}/.bash_profile`,
      linux: `${process.env.HOME}/.bash_profile`
    },
    language: 'bash',
    icon: 'bash-icon.svg'
  },
  'NPM': {
    path: {
      windows: `${process.env.HOME}/.npmrc`,
      mac: `${process.env.HOME}/.npmrc`,
      linux: `${process.env.HOME}/.npmrc`
    },
    language: 'bash',
    icon: 'bash-icon.svg'
  },
  'VSCode': {
    path: {
      windows: `%APPDATA%\Code\User\settings.json`,
      mac: `${process.env.HOME}/Library/Application Support/Code/User/settings.json`,
      linux: `${process.env.HOME}/.config/Code/User/settings.json`
    },
    language: 'json',
    icon: 'vscode-icon.svg'
  },
}