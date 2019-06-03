const fs = require('fs')

module.exports = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (e) {
    return e
  }
}