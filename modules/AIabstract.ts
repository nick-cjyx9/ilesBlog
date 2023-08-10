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
    var data = {"go_further.mdx": "总结摘要：博文中作者描述了自己最近感到浮躁和焦虑的情绪，同时提到了对意义的思考和技术成长的渴望。作者回顾了前半个假期的成果，并提出了接下来的规划。", "hello_world.mdx": "这篇博文是一个Markdown语法测试文档，包含了中文、日文和英文的测试文案。文档中包含了标题、文本样式、列表、链接与图片、引用、代码块、表格、分割线、脚注和数学公式等内容的示例。", "music_power.mdx": "博主最近重新听了Lube（柳拜）的歌曲《这里的黎明静悄悄》，勾起了去年夏天的情感。在住校的晚上，博主喜欢在耳机里放歌，让环境不太安静，以免感到孤独和恐惧。博主在中考后的暑假遭遇了疫情和高温，被困在限电的宿舍里，感到非常down。在初中时，朋友向博主推荐了Lube的歌，虽然博主对苏联历史不太了解，但是Lube的雄厚嗓音让博主的心安稳下来。在高温被困的那几天，博主每天都循环播放Lube的歌，这些歌曲承载了博主的无聊、愧疚和孤独感。博主也提到了另一位歌手花谱，她的歌曲也给博主留下了深刻的印象。", "reset_my_sail.mdx": "这篇博文是作者用iles重写博客后的第一篇文章。作者回忆了自己过去的一些经历，包括参加信息竞赛、被记违纪、退出信息竞赛等。他还提到了自己对编程的爱好，以及在高中时面临的困境和迷茫。作者还回顾了自己在住校时的生活和与同学的关系，以及对家人的思念和感激之情。最后，作者分享了一些关于自己成长的琐碎事情和对过去的一些遗憾。", "self_host_tutorial.mdx": "", "jotting.mdx": "最近作者记录了一些想法和折腾的事情，并将这些想法记录在Telegram的saved messages中。作者折腾了很多东西，包括一个博客、一个报废的套壳GPT、一个日记软件后端以及一个WSL终端环境。作者感觉自己在学技术和备考高考方面都有些摆烂，但是假期还有20天，希望能够完成手上的日记软件并维护好博客和博文。作者还计划实现一个基于Github API和Nuxt的博客系统，并受到另一位高中生的影响，打算做一个具有社交属性的日记软件。作者还开心地分享了自己的一些喜事，包括被采纳的issue和合并的PR，以及喜欢的人来小县城看自己的事情。最后，作者提到还有20天就要开学了，意识到自己作业还剩一半，决定去写作业。"};
 // :::DATAEND:::

    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index + 1, filename.length);
    if (isValidKey(MDname, data)) {
      frontmatter.summary = data[MDname];
    }
  }
}) as IlesModule
