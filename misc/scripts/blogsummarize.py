# 使用者必读： 由于max_token的限制，我将字数限制到4200字内，也就是说4200字以外的文章不会被摘要！
import openai as o
from os import getenv, listdir, path

o.api_base = 'https://p0.kamiya.dev/api/openai'
o.api_key = getenv('KAMIYA_API_KEY')
def get_completion(messages, model="gpt-3.5-turbo", temperature=0):
    response = o.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature,
    )
    return response.choices[0].message["content"]

# {'file':(none|'abstract'), }
with open('E:/dev/RinaBlog/misc/scripts/data.json', 'r', encoding='utf-8') as f:
    try:
        data = eval(f.read())
    except:
        data = {}
    f.close()

messages = [
    {
        'role':'system', 
        'content':'你是为Nick Chen的博客进行博文摘要的机器人，请你将他的博客的博文(.mdx)进行简短摘要(忽略链接和格式)，尽量涵盖所有事实，不要有任何编造！字数不超过400！'
    },
    {
        'role':'user',
        'content': ''
    }
]

path = 'E:/dev/RinaBlog/src/pages/post/'
files = listdir(path)
for file in files:
    print('START:::', file, end=' ')
    if file not in data.keys():
        data[file] = ''
    if data[file] == '' or data[file] == None:
        with open(path+file, 'r', encoding='utf-8') as f:
            item = f.read()[:4201]
            if(('draft: true' in item) or ('draft:true' in item)): 
                print('Is Draft. Continue.')
                continue
            f.close()
        messages[1]['content'] = item
        print('Sending Message to ChatGPT!',end=' ')
        response = get_completion(messages)
        data[file] = response
        print('Done.')
        print(response)
    else:
        print('Already Generated!')

with open('E:/dev/RinaBlog/misc/scripts/data.json', 'w', encoding='utf-8') as f:
    processed = str(data).replace("'",'"')
    f.write(processed)
    f.close()
with open('E:\dev\RinaBlog\modules\AIabstract.ts','r',encoding='utf-8') as f:
    origin_code = f.read()
    f.close()
cp = list(origin_code)
cp[origin_code.find('// :::DATASTART:::')+19:origin_code.find('// :::DATAEND:::')-1]='    var data = '+processed+';\n'
foo = ''
for i in cp:
    foo+=i
# print(foo)
with open('E:\dev\RinaBlog\modules\AIabstract.ts','w',encoding='utf-8') as f:
    f.write(foo)
    f.close()

input('Saved!Press any key to exit!')
