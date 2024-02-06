# 2023/7/6 created by ai
import os
import datetime
import sys

def create_mdx_file(filename,title):
    file_path = os.path.join('E:/dev/blog/src/pages/post/', filename + '.mdx')
    # 获取当前日期和时间
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # 构建MDX文件内容
    file_content = f"""---
title: {title}
date: {now}
tags: ["",]
licensed: true
isAIGenerated: false
cover: ""
draft: true
---

<Excerpt />

"""
    # 创建并写入文件内容
    with open(file_path, 'x',encoding='utf-8') as f:
        f.write(file_content)
    # 输出成功消息
    print(f"成功创建文件 {file_path}")
# 从命令行参数中获取文件名
title = sys.argv[1]
filename = sys.argv[2]
# 调用函数创建MDX文件
create_mdx_file(filename,title)
path = os.path.join('E:/dev/blog/src/images/', filename)
os.makedirs(path, exist_ok=True)
