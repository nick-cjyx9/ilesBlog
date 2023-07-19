from time import sleep
from requests import get
from json import dumps
from re import findall, compile

headers = {
    'accept': 'application/json',
    'User-Agent': 'nick-cjyx9/ilesBlog (Web) (http://github.com/nick-cjyx9/ilesBlog)'
}
api_url = 'https://api.bgm.tv/v0'

with open('./data.html','r',encoding='utf-8') as f:
    base = f.readlines()
    f.close()

# processed = [ {} for _ in range(0,len(base)//5) ]
processed = ''

for i in range(0,len(base)//5):
    item = {}
    sleep(0.8)
    item['id'] = i
    item['characterName'] = compile(r'title="(.*?)"').findall(base[i * 5 + 1])[0]
    item['characterId'] = compile(r'/character/(\d+)').findall(base[i * 5 + 1])[0]
    item['characterAvatar'] = 'https:' + compile(r'<img src="(.*?)">').findall(base[i * 5 + 1])[0]
    print(item['characterName'] + ' Getting...', end=' ')
    item['characterInfo'] = get(api_url + '/characters/' + item['characterId'], headers=headers).json()
    # processed[i] = item
    processed = processed + dumps(item).replace(r'\n','').replace(r'\r','') + '\n'
    print(' Done.')
try:
    with open('waifu_data.json', 'w', encoding='utf-8') as f:
        f.write(str(processed))
        f.close()
except Exception as exc:
    print("ERROR!保存出错，请手动保存！")
    print(processed)
    print(str(exc))
    exit(0)

print('Bingo!')
