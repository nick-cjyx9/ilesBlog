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
  extendFrontmatter(frontmatter, filename: string) {
    // :::DATASTART:::
    var data = {"Hello_World.mdx": "这篇博文是一个Markdown语法测试文档，包含中文、日文和英文的测试文案。文档中包括了标题、文本样式、列表、链接与图片、引用、代码块、表格、分割线、脚注和数学公式等内容。其中，还包括了一段Python代码的示例。", "music_power.mdx": "这篇博文是作者分享了自己重新听Lube（柳拜）和花谱的歌曲的感受。作者提到，在住校的晚上，他喜欢在耳机里放歌来避免孤独和恐惧的感觉。作者回忆起中考后的暑假，遭遇疫情和高温，被困在宿舍里，感到孤独和愧疚。在这段时间里，他开始听Lube的歌曲，虽然不了解歌词的意思，但柳拜的嗓音让他感到安稳和躁动的心得到平静。作者还提到，他也喜欢花谱的歌曲，特别是《不可解》，这首歌的歌词和情感让他深深折服。他现在将花谱的歌曲加入了自己的循环曲目。作者期待未来花谱的歌曲能给他留下更多的记忆。", "reset_my_sail.mdx": "这篇博文是作者用iles重写博客后的第一篇文章。作者回忆了自己过去的一些事情，包括参加信息竞赛、被记违纪、退出信息竞赛等经历。他提到自己在初中时是一个好学生，但在高中时因为学校不重视信息竞赛而感到失望。他还提到自己对编程有兴趣，但在高中三年没有进步。他回顾了自己住校的时光，以及与同学和家人的关系。最后，他表达了对过去的一些遗憾和思考。", "review_yuru_camp.mdx": "这篇博文是关于日本动漫《摇曳露营Δ》的完整摘要。作者认为这部番剧是一部剧情轻松愉快的日常番，节奏和气氛接近《相合之物》。第一季讲述了一群女孩因为露营聚在一起，第二季更偏向讲人与人之间的关系。作者推荐这部番给那些有很多时间却不知道做什么或者焦虑的人。他们给出了番剧的官方网站链接和自己的评分。文章还对番剧中的人物进行了介绍，包括芝麻凛、抚子、犬山葵、大垣和酒鬼老师。作者表示这部番剧给他带来了对人与人之间的关心的感动，让他意识到自己需要改变。他总结说，《摇曳露营》传递的信息是善待爱你的人、好好生活、拥抱自然。文章还提到了一些小缺点和关于文化输出的讨论。最后，作者以一段关于自己喜欢志摩リン小姐的故事结尾。"};
 // :::DATAEND:::

    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index + 1, filename.length);
    if (isValidKey(MDname, data)) {
      frontmatter.summary = data[MDname];
    }
  }
}) as IlesModule
