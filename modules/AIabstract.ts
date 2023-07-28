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
    var data = {
      "ai_abstract" : "中国气象局启动台风一级应急响应，因为今年第5号台风“杜苏芮”再次升级为超强台风。台风中心距离福建省厦门市南偏东方向约360公里，最大风力达到16级。预计台风将以每小时15-20公里的速度向北偏西方向移动，28日早晨到上午在福建东山到莆田一带沿海登陆，登陆时强度为强台风级或超强台风级。",
      "Hello_World" : "这篇博文是一个Markdown语法测试文档，包含了各种Markdown语法的示例。文档中展示了不同级别的标题、文本样式（粗体、斜体、删除线、代码）、无序列表、有序列表、链接、图片、引用、代码块（包括JavaScript和Python代码）、表格、分割线、脚注和数学公式的使用。这些示例都是为了展示Markdown语法的使用方法。",
      "trip_to_panzhihua" : "这篇博文是关于作者在四川西南地区的2.5日游记。第一天，作者到达了攀枝花市，介绍了该市的地理位置和特点，并品尝了当地的盐边羊肉粉。作者参观了三线建设博物馆，了解了中国西南地区的城市化发展历程。晚上，作者在金沙江旁观赏了壮丽的夕阳。第二天，作者前往会理古城，欣赏了古城的商业布局和传统建筑风格。通过这次旅行，作者对四川西南地区的自然美景、地理特征和文化历史有了更深的了解。"
    };
    var index = filename.lastIndexOf("\/");
    var index2 = filename.lastIndexOf(".");
    var MDname = filename.substring(index+1, index2);
    if(isValidKey(MDname,data)){
      frontmatter.summary = data[MDname];
    }
  }
})as IlesModule
