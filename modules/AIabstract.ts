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
    var data = {"hello_world.mdx": "Hello World!(你好！世界！)\n\n这是一个Markdown语法测试文档，包含了各种文本样式、列表、链接、图片、引用、代码块、表格、分割线、脚注和数学公式的示例。\n\n文本样式包括粗体、斜体和删除线文本，以及代码文本。\n\n列表包括无序列表和有序列表。\n\n链接包括百度和谷歌的链接。\n\n图片展示了Markdown的Logo。\n\n引用展示了一个引用文本。\n\n代码块展示了JavaScript和Python的代码。\n\n表格展示了商品名称和价格的表格。\n\n分割线用于分隔内容。\n\n脚注展示了一个带脚注的句子。\n\n数学公式展示了一个积分公式。\n\n以上是这个Markdown语法测试文档的摘要。", "reset_my_sail.mdx": "最近，Nick Chen花了一个多星期的时间用iles重写了他的博客。他回忆起了自己过去的一些事情，包括退出信息竞赛、住校时光等。他在初中时是一个好学生，但在高中时，他发现学校几乎不重视信息竞赛，没有练习时间和资源，他的状态变得不好。最终，他决定退出信息竞赛。他还回忆了自己住校的时光，虽然大部分时间都是暗无天日的，但也有一些让他开怀大笑的时刻。他还分享了他的生日时收到的祝福和礼物。最后，他提到了他成长的地方，一个未脱贫的县城，他似乎越来越不敢面对这个小县城了。他觉得未来可能再也没有机会回到那里了。"};
 // :::DATAEND:::
    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index+1, filename.length);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
