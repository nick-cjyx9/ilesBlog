/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable regexp/no-misleading-capturing-group */
/* eslint-disable regexp/optimal-quantifier-concatenation */

function removeMd(md) {
  // https://github.com/stiang/remove-markdown/blob/main/index.js
  const listUnicodeChar = false
  const stripListLeaders = true
  const gfm = true
  const useImgAltText = true
  const abbr = false
  const replaceLinksWithURL = false
  const htmlTagsToSkip = ['Heimu']
  let output = md || ''
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}/gm, '')
  try {
    if (stripListLeaders) {
      if (listUnicodeChar)
        output = output.replace(/^(\s*)([*\-+]|\d+\.)\s+/gm, `${listUnicodeChar} $1`)
      else
        output = output.replace(/^(\s*)([*\-+]|\d+\.)\s+/gm, '$1')
    }
    if (gfm) {
      output = output
        .replace(/\n={2,}/g, '\n')
        .replace(/~{3}.*\n/g, '')
        .replace(/~~/g, '')
        .replace(/`{3}.*\n/g, '')
    }
    if (abbr) {
      output = output.replace(/\*\[.*\]:.*\n/, '')
    }
    output = output
      .replace(/<[^>]*>/g, '')
    let htmlReplaceRegex = /<[^>]*>/g
    if (htmlTagsToSkip.length > 0) {
      const joinedHtmlTagsToSkip = `(?!${htmlTagsToSkip.join('|')})`
      htmlReplaceRegex = new RegExp(
        `<${
        joinedHtmlTagsToSkip
        }[^>]*>`,
        'gi',
      )
    }
    output = output
      .replace(htmlReplaceRegex, '')
      .replace(/^[=\-]{2,}\s*$/g, '')
      .replace(/\[\^.+?\](: .*$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*$/g, '')
      .replace(/!\[(.*?)\][[(].*?[\])]/g, useImgAltText ? '$1' : '')
      .replace(/\[([^\]]*)\][[(].*?[\])]/g, replaceLinksWithURL ? '$2' : '$1')
      .replace(/^(\n)?\s{0,3}>\s?/gm, '$1')
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      .replace(/^(\n)?\s*#{1,6}\s*( (.+))? +#+$|^(\n)?\s*#{1,6}\s*( (.+))?$/gm, '$1$3$4$6')
      .replace(/(\*+)(\S)(.*?\S)??\1/g, '$2$3')
      .replace(/(^|\W)(_+)(\S)(.*?\S)??\2($|\W)/g, '$1$3$4$5')
      .replace(/(`{3,})(.*?)\1/g, '$2')
      .replace(/`(.+?)`/g, '$1')
      .replace(/~(.*?)~/g, '$1')
  }
  catch (e) {
    console.error(e)
    return md
  }
  return output
}

module.exports = { removeMd }
