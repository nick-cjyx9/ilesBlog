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
    var data = {"diary_2023_eight.mdx": "", "go_further.mdx": "这篇博文是关于作者近期的心情和计划的总结。作者感到焦虑，觉得自己一事无成。他提到了一个朋友Randy的观点，认为工作和高考都是无意义的，但生活中总是有一些自愿去做的事情。作者回顾了自己对算法竞赛的热爱，但由于学校环境的限制，他不得不放弃。然而，最近他在国区leetcode上解决了一道题目，看到通过的标志时感到激动，这让他确定了自己对算法竞赛的热爱并非虚无缥缈。他还提到了自己的技术成长，希望有一个关心他的大佬能给他指点。他在GitHub上提交了第一个被合并的PR，对于做开源贡献的感觉非常好。他希望自己能成为像evan和diy一样的开发者。然而，他也感到困惑，不知道学习技术的意义在哪里，如果只是为了自己开心，会因为影响高考而感到愧疚。接下来，作者规划了剩下的25天的计划，包括完成作业、完成AI日记项目的demo和和朋友贴贴。", "hello_world.mdx": "Hello World!(你好！世界！)\n\n这是一个Markdown语法测试文档，包含了各种文本样式、列表、链接、图片、引用、代码块、表格、分割线、脚注和数学公式的示例。\n\n文本样式包括粗体、斜体和删除线文本，以及代码文本。\n\n列表包括无序列表和有序列表。\n\n链接包括百度和谷歌的链接。\n\n图片展示了Markdown的Logo。\n\n引用展示了一个引用文本。\n\n代码块展示了JavaScript和Python的代码示例。\n\n表格展示了商品名称和价格的表格。\n\n分割线用于分隔内容。\n\n脚注展示了一个带脚注的句子。\n\n数学公式展示了一个积分公式。\n\n以上是这个Markdown语法测试文档的摘要。", "music_power.mdx": "博文摘要：博主分享了自己对音乐的感受和体验。他提到很久没听Lube（柳拜）的歌了，最近重新听了《这里的黎明静悄悄》，勾起了他去年夏天的情感。他喜欢在晚上住校时戴着耳机听歌，以避免孤独和恐惧的感觉。他回忆起中考后的暑假，因疫情被困在限电的宿舍里，一个人远离家乡，心情特别低落。他开始听Lube的歌，虽然不了解苏联历史，但柳拜的雄厚嗓音让他感到安稳。他每天循环播放Lube的歌，把无聊、愧疚和孤独感托付给这些歌曲。他还提到偶然听到《倔强》时，愉快的初中时光涌入脑中。另外，他还分享了对花谱的喜爱，2022年春节时听到了《不可解》，觉得不一般，收藏起来。最近再次听到这首歌，被歌词和情感折服，现在花谱的歌成了他的循环曲目。他期待未来花谱的歌能给他留下更多的记忆。", "reset_my_sail.mdx": "最近，Nick Chen花了一个多星期的时间重新搭建了自己的博客，并且写下了这篇博文作为第一篇正式的文章。他回忆起了自己过去的一些事情，包括参加信息竞赛、被记违纪、住校时光等。他提到自己在初中时是一个好学生，但在高中时因为各种压力和焦虑而失去了动力。他还思考了自己是否应该放弃信息竞赛，以及对住校生活的回忆。他分享了一些照片，包括和朋友一起玩游戏、以及朋友祝他生日快乐的瞬间。最后，他提到了自己成长的小县城，对这个地方充满了回忆，但也开始逐渐蔑视曾经的自己。他感慨未来可能再也回不到这个地方了。", "self_host_tutorial.mdx": ""};
 // :::DATAEND:::
    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index+1, filename.length);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
