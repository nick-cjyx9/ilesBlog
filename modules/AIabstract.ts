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
    var data = {"ai_abstract.mdx": "30岁的姚颂是东方空间的联席CEO，他决定创办这家民营火箭公司，追赶马斯克的SpaceX。姚颂曾创办深鉴科技，该公司于2018年被赛灵思以3亿美元的价格收购。他也兼职做了经纬中国的风险合伙人，并发起SEE Fund无限基金。姚颂从小就是航天迷和军事迷，对航天产业充满热情。民营航天成为一个新兴创业机会，姚颂看到了机会。他加入了东方空间，该公司的技术团队来自长征十一号运载火箭团队，具备丰富的技术和商业意识。东方空间已获得4亿元的天使轮融资，投资方包括红杉中国、经纬中国、SEE Fund等。中国商业卫星发射数量逐年增加，姚颂认为中国有巨大的发射需求和机会，火箭运力和卫星发射需求不匹配，需要社会力量共同解决。", "Hello_World.mdx": "这篇博文是一个Markdown语法测试文档，包含了各种Markdown语法的示例。文档中展示了不同级别的标题、文本样式（粗体、斜体、删除线、代码）、无序列表、有序列表、链接、图片、引用、代码块（包括JavaScript和Python代码）、表格、分割线、脚注和数学公式的使用。这些示例都是为了展示Markdown语法的使用方法。", "trip_to_panzhihua.mdx": "这篇博文是关于作者在四川西南地区的2.5日游记。第一天，作者到达攀枝花市，介绍了该市的地理位置和特点。作者品尝了当地的盐边羊肉粉，感受到了四川美食的独特风味。在攀枝花市参观了三线建设博物馆，了解了中国西南地区的城市化发展历程。晚上在金沙江旁欣赏了壮丽的夕阳。第二天，作者前往会理古城，该地以其独特的商业布局和历史文化遗产而闻名。通过这次旅行，作者加深了对四川西南地区的地理特征和文化历史的理解。"};
    var index = filename.lastIndexOf("\/");
    var MDname = filename.substring(index+1, filename.length);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
