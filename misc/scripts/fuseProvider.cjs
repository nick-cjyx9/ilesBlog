const fs = require('node:fs')
const path = require('node:path')

const { removeMd } = require('../removeMD.cjs')
// node .\misc\scripts\fuseProvider.cjs

function generateData() {
  const postDir = './src/pages/post'
  const plainText = markdown => removeMd(markdown.replace('\n', '').replace(/^---(.+?)---/s, ''))
  const outputs = []
  readFolder(postDir).forEach((fileName) => {
    const text = fs.readFileSync(fileName, 'utf-8')
    outputs.push({
      title: text.replace('\n', '').match(/title:(.+?)[\r|\n]+?/)?.[1],
      pathName: path.basename(fileName),
      content: plainText(text).replace(/\s*/g, ''),
      tags: text.replace('\n', '').match(/tags:(.+?)[\r|\n]+?/)?.[1],
    })
  })
  const json_outputs = JSON.stringify(outputs)
  fs.writeFileSync('./public/fuse/data.json', json_outputs)
}

function readFolder(folderPath) {
  const files_list = []
  try {
    const files = fs.readdirSync(folderPath)
    files.forEach((file) => {
      const filePath = path.join(folderPath.toString(), file)
      const stats = fs.statSync(filePath)
      if (stats.isFile())
        files_list.push(filePath)
    })
  }
  catch {
    return undefined
  }
  return files_list
}
try {
  generateData()
  // eslint-disable-next-line no-console
  console.log('✅ Successfully generating Fuse.js data!!!')
}
catch (error) {
  console.error('❎ Generating Fuse.js data error!!!\n', error)
}
