import fs from 'fs'
import path from 'path'
interface fuseItem {
    title: string | undefined,
    pathName: string,
    content: string,
    tags: string | undefined
}

export default function generateData() {
    const postDir = './src/pages/post'
    const removeMd = require('remove-markdown');
    const plainText = (markdown: string) => removeMd(markdown.replace('\n', '').replace(/^---(.+?)---/s, ''))
    let outputs: Array<fuseItem> = []
    readFolder(postDir)!.forEach((fileName) => {
        let text = fs.readFileSync(fileName, "utf-8");
        outputs.push({
            title: text.replace('\n', '').match(/title:(.+?)[\r|\n]+?/)?.[1],
            pathName: path.basename(fileName),
            content: plainText(text).replace(/\s*/g, ""),
            tags: text.replace('\n', '').match(/tags:(.+?)[\r|\n]+?/)?.[1],
        })
    })
    const json_outputs = JSON.stringify(outputs)
    fs.writeFileSync('./public/fuse/data.json',json_outputs)
}

function readFolder(folderPath: fs.PathLike) {
    let files_list: Array<string> = []
    try {
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            const filePath = path.join(folderPath.toString(), file);
            const stats = fs.statSync(filePath);
            if (stats.isFile()) files_list.push(filePath)
        });
    } catch (error) {
        return undefined
    }
    return files_list
}