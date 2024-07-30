// 实用工具，用来快速遍历树
import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'

// 匹配自定义语法，捕获bv号
const syntaxPattern = /\[bilibili\|(BV.{10})\]/g
const remarkBiliLink: Plugin<[], Root> = function () {
    // 返回一个接受语法树的变形器
    return (ast) => {
        // 遍历树上所有'text'节点
        visit(ast, 'text', function (node, _, parent) {
            let matches = [...node.value.matchAll(syntaxPattern)];
            if (matches.length !== 0) {
                let l = 0;
                let output = []
                matches.forEach(match => {
                    if (l !== match.index) output.push({ type: 'text', value: node.value.slice(l, match.index) });
                    l = match.index + match[0].length
                    // 变形为 html 节点
                    output.push({
                        type: 'mdxFlowExpression', value: `<iframe src="//player.bilibili.com/player.html?bvid=${match[1]}&as_wide=1&high_quality=1&amp;page=1" frameborder="no" scrolling="no" width="95%" height="600"></iframe>`, data: { raw: true, count: 1 }
                    })
                });
                if (l !== node.value.length)
                    output.push({ type: 'text', value: node.value.slice(l) })
                console.log(output)
                // 替换为变形后的子树
                parent!.children = output as any
            }
        })
    }

}

export default remarkBiliLink;
