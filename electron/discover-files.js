const readFile = require('./read-file')
const commonFiles = require('./common-files')
const getPlatform = require('./get-platform')
const path = require('path')

const platform = getPlatform()

module.exports = () => {
  const files = Object.entries(commonFiles).reduce((acc, [key, commonFileObj]) => {
    try {
      acc[key] = {
        path: commonFileObj.path[platform],
        contents: readFile(commonFileObj.path[platform]),
        fileName: path.basename(commonFileObj.path[platform]),
        icon: commonFileObj.icon || ''
      }
      return acc
    } catch (e) { console.error(e) }
  }, {})

  return files
}