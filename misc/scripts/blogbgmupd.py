from json import dumps
from time import sleep
from requests import get
from re import findall, compile

sleep_time = 0.1 # relay time. unit:(s)
user_name = 'cjyx9' # both id and user_name are allowed
api_url = 'https://api.bgm.tv'
mono_page = 'https://bgm.tv/user/{user_name}/mono/character?page='.format(user_name=user_name)
headers = {
    'accept': 'application/json',
    'User-Agent': 'nick-cjyx9/ilesBlog (Web) (http://github.com/nick-cjyx9/ilesBlog)'
}

origin_list = []

def get_list(base:str)->str:
    global origin_list
    p = compile(r'(?s)<ul class="coversSmall">(.*?)</ul>')
    # GPT:(?s)：这是一个标志，表示将点号（.）特殊字符的行为作为“单行”模式。这意味着点号（.）可以匹配包括换行符在内的任意字符。
    list_text:str = p.findall(base)[0][1:-1]
    origin_list += list_text.split('\n')
    return list_text

print('Getting: page 1',end='.')
first_page = mono_page.format(user_name=user_name) + '1'
first_page_get = get(first_page, headers=headers)
first_page_get.encoding = 'utf-8'
origin = first_page_get.text
get_list(origin)
print(' Done.')

# dev: read data from file
# with open('./origin.html', 'r', encoding='utf-8') as f:
#     origin = f.read()
#     f.close()

# case of pages>3
tmp_result = compile(r'<span class="p_edge">\(&nbsp;1&nbsp;/&nbsp;(\d+)&nbsp;\)</span>').findall(origin)
if(len(tmp_result)!=1):
    # case of page=2&1
    if(r'<div class="page_inner"><strong class="p_cur">1</strong><a href="/user/{user_name}/mono/character?page=2" class="p">2</a><a href="/user/{user_name}/mono/character?page=2" class="p">&rsaquo;&rsaquo;</a></div> <div class="section_line clear"></div>'.format(user_name=user_name) in origin):
        max_page = 2
    else:
        max_page = 1
else:
    max_page = tmp_result[0]


print('Max page:',max_page)
if max_page >= 2:
    for i in range(2,max_page+1):
        print('Getting: page',i,end='.')
        item = get(mono_page + str(i), headers=headers)
        item.encoding = 'utf-8'
        get_list(item.text)
        print(' Done.')
        sleep(sleep_time)

print('Page data getting success. ',len(origin_list)//5,' items in total.')
print('Deal with single character!')

processed = ''
# processed data for my blog

for i in range(0,len(origin_list)//5):
    item = {}
    item['characterName']:str = compile(r'title="(.*?)"').findall(origin_list[i * 5 + 1])[0]
    print(item['characterName'] + ' Getting...', end=' ')
    item['characterId']:str = compile(r'/character/(\d+)').findall(origin_list[i * 5 + 1])[0]
    item['characterAvatar']:str = 'https:' + compile(r'<img src="(.*?)">').findall(origin_list[i * 5 + 1])[0]
    characterInfo = get(api_url + '/v0/characters/' + item['characterId'], headers=headers).json()
    item['characterImg']:dict = characterInfo['images']
    item['characterSummary']:str = characterInfo['summary'].replace(r'"',r'\"')
    item['characterInfo']:list = characterInfo['infobox']
    processed = processed + dumps(item).replace(r'\n','').replace(r'\r','') + '\n'
    print(' Done.')
    sleep(sleep_time)

try:
    with open('E:/dev/RinaBlog/misc/waifu/waifu_data.json', 'w', encoding='utf-8') as f:
        f.write(str(processed))
        f.close()
    with open('E:/dev/RinaBlog/src/pages/girls.vue','r',encoding='utf-8') as f:
        origin_girl_page = f.read()
        f.close()
    with open('E:/dev/RinaBlog/src/pages/girls.vue','w',encoding='utf-8') as f:
        cp = list(origin_girl_page)
        cp[origin_girl_page.find('// :::DATASTART:::')+19:origin_girl_page.find('// :::DATAEND:::')-1]='let text_data = `'+processed+'`;\n'
        foo = ''
        for i in cp:
            foo+=i
        f.write(foo)
        f.close()
except Exception as exc:
    print("ERROR!Plz save it manually!")
    print(processed)
    print(str(exc))
    exit(0)

print('Bingo!File Saved!')
