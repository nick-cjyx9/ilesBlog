const fs = require('fs');
const path = require('path');
// node .\misc\scripts\fuseProvider.js
function removeMd(md, options) {
    // https://github.com/stiang/remove-markdown/blob/main/index.js
    options = options || {};
    options.listUnicodeChar = options.hasOwnProperty('listUnicodeChar') ? options.listUnicodeChar : false;
    options.stripListLeaders = options.hasOwnProperty('stripListLeaders') ? options.stripListLeaders : true;
    options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true;
    options.useImgAltText = options.hasOwnProperty('useImgAltText') ? options.useImgAltText : true;
    options.abbr = options.hasOwnProperty('abbr') ? options.abbr : false;
    options.replaceLinksWithURL = options.hasOwnProperty('replaceLinksWithURL') ? options.replaceLinksWithURL : false;
    options.htmlTagsToSkip = options.hasOwnProperty('htmlTagsToSkip') ? options.htmlTagsToSkip : [];
    var output = md || '';
    output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, '');
    try {
        if (options.stripListLeaders) {
            if (options.listUnicodeChar)
                output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + ' $1');
            else
                output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1');
        }
        if (options.gfm) {
            output = output
                .replace(/\n={2,}/g, '\n')
                .replace(/~{3}.*\n/g, '')
                .replace(/~~/g, '')
                .replace(/`{3}.*\n/g, '');
        }
        if (options.abbr) {
            output = output.replace(/\*\[.*\]:.*\n/, '');
        }
        output = output
            .replace(/<[^>]*>/g, '')
        var htmlReplaceRegex = new RegExp('<[^>]*>', 'g');
        if (options.htmlTagsToSkip.length > 0) {
            var joinedHtmlTagsToSkip = '(?!' + options.htmlTagsToSkip.join("|") + ')';
            htmlReplaceRegex = new RegExp(
                '<' +
                joinedHtmlTagsToSkip +
                '[^>]*>',
                'ig'
            );
        }
        output = output
            .replace(htmlReplaceRegex, '')
            .replace(/^[=\-]{2,}\s*$/g, '')
            .replace(/\[\^.+?\](\: .*?$)?/g, '')
            .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
            .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? '$1' : '')
            .replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g, options.replaceLinksWithURL ? '$2' : '$1')
            .replace(/^(\n)?\s{0,3}>\s?/gm, '$1')
            .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
            .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, '$1$3$4$6')
            .replace(/([\*]+)(\S)(.*?\S)??\1/g, '$2$3')
            .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, '$1$3$4$5')
            .replace(/(`{3,})(.*?)\1/gm, '$2')
            .replace(/`(.+?)`/g, '$1')
            .replace(/~(.*?)~/g, '$1');
    } catch (e) {
        console.error(e);
        return md;
    }
    return output;
};

function generateData() {
    const postDir = './src/pages/post'
    const plainText = (markdown) => removeMd(markdown.replace('\n', '').replace(/^---(.+?)---/s, ''))
    let outputs = []
    readFolder(postDir).forEach((fileName) => {
        let text = fs.readFileSync(fileName, "utf-8");
        outputs.push({
            title: text.replace('\n', '').match(/title:(.+?)[\r|\n]+?/)?.[1],
            pathName: path.basename(fileName),
            content: plainText(text).replace(/\s*/g, ""),
            tags: text.replace('\n', '').match(/tags:(.+?)[\r|\n]+?/)?.[1],
        })
    })
    const json_outputs = JSON.stringify(outputs)
    fs.writeFileSync('./public/fuse/data.json', json_outputs)
}

function readFolder(folderPath) {
    let files_list = []
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
try {
    generateData()
    console.log('✅ Successfully generating Fuse.js data!!!')
} catch(error) {
    console.error('❎ Generating Fuse.js data error!!!\n',error)
}