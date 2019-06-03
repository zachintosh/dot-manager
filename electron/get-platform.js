const os = require('os')

const platformMap = {
  'darwin': 'mac',
  'win32': 'windows',
  'linux': 'linux',
}

module.exports = () => {
  return platformMap[os.platform()]
}