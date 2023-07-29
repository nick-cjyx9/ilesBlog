import type { IlesModule } from 'iles'
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}
// https://blog.csdn.net/zy21131437/article/details/121246493
export default () => ({
  name: 'AIabstract',
  extendFrontmatter (frontmatter, filename:string) {
    // :::DATASTART:::
    var data = {"hello_world.mdx": "这篇博文是一个Markdown语法测试文档，包含了各种Markdown语法的示例。文档中包括了标题、文本样式（粗体、斜体、删除线、代码文本）、无序列表、有序列表、链接、图片、引用、代码块（包括JavaScript和Python代码示例）、表格、分割线、脚注和数学公式的示例。这些示例都是为了展示Markdown语法的使用方法。", "reset_my_sail.mdx": "最近，Nick Chen花了一个多星期的时间重新搭建了自己的博客。他回顾了自己最近的生活，特别是参加信息竞赛和退出信竞的经历。他在高中时期参加了信息竞赛，但由于学校对OI不重视，他感到很失望。他开始逃避现实，导致他的成绩下降并与父母发生争吵。最终，他决定退出信竞。然而，他最近重新找回了对编程的激情，并开始思考是否应该再次努力参加OI。此外，他还回顾了自己在住校期间的生活和一些琐碎的回忆。他还分享了一些照片和生日礼物。尽管他对自己的过去有些矛盾和迷茫，但他仍然对未来充满期待。"};
 // :::DATAEND:::
    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index+1, filename.length);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
