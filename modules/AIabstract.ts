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
    var data = {"diary_2023_eight.mdx": "这篇博文是Nick Chen在2023年8月寄出的一封信。他在信中提到了一些关于他生活的事实和感受。首先，他提到了他的生活状态，他说自己过得很好。然后，他提到了他最近的旅行经历，他去了一个美丽的海滩度假村，享受了阳光和海浪。他还提到了他的工作，他说自己在工作中取得了一些进展，并且感到很满意。此外，他还提到了他的家人和朋友，他说他很幸运有这么多支持和关爱他的人。最后，他表达了对未来的期望和希望，他说他会继续努力工作，追求自己的梦想。整篇博文充满了积极向上的情绪和对生活的热爱。", "go_further.mdx": "", "hello_world.mdx": "Hello World!(你好！世界！)\n\n这是一个Markdown语法测试文档，包含了各种文本样式、列表、链接、图片、引用、代码块、表格、分割线、脚注和数学公式的示例。\n\n文本样式包括粗体、斜体和删除线文本，以及代码文本。\n\n列表包括无序列表和有序列表。\n\n链接包括百度和谷歌的链接。\n\n图片展示了Markdown的Logo。\n\n引用展示了一个引用文本。\n\n代码块展示了JavaScript和Python的代码示例。\n\n表格展示了商品名称和价格的表格。\n\n分割线用于分隔内容。\n\n脚注展示了一个带脚注的句子。\n\n数学公式展示了一个积分公式。\n\n以上是这个Markdown语法测试文档的摘要。", "music_power.mdx": "", "reset_my_sail.mdx": "最近，Nick Chen花了一个多星期的时间重新搭建了自己的博客，并且写下了这篇博文作为第一篇正式的文章。他回忆起了自己过去的一些事情，包括参加信息竞赛、被记违纪、住校时光等。他提到自己在初中时是一个好学生，但在高中时因为各种压力和焦虑而失去了动力。他还思考了自己是否应该放弃信息竞赛，以及对住校生活的回忆。他分享了一些照片，包括和朋友一起玩游戏、嘲笑《原神》以及朋友祝他生日快乐的瞬间。最后，他提到了自己成长的小县城，对这个地方充满了回忆，但也开始逐渐蔑视曾经的自己。他感慨未来可能再也回不到这个地方了。"};
 // :::DATAEND:::
    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index+1, filename.length);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
