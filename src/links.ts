/**
 * 友情链接配置文件
 * 包含友情链接和博客聚合平台数据
 */

interface LinkItem {
    site_name: string;
    site_url: string;
    site_description: string;
    site_avatar?: string;
    is_active?: boolean;
}

const linksConfig = {
    // 友情链接
    links: [
        {
            "site_name": "莫比乌斯",
            "site_url": "https://onojyun.com/",
            "site_description": "写作，一场自我悖驳的旅程。我写自己的生活、也写自己的讣告。",
            "site_avatar": "https://onojyun.com/wp-content/uploads/2024/03/a2d42-cropped-mobius_icon_black-edited.png",
            "is_active": true
        },
        {
            "site_name": "映屿",
            "site_url": "https://www.glowisle.me/",
            "site_description": "关于互联网、书籍、生活琐事以及那些一闪而过的念头。",
            "site_avatar": "#",
            "is_active": true
        },
        {
            "site_name": "極客死亡計劃",
            "site_url": "https://www.geedea.pro/",
            "site_description": "这里只有真情流露和赤裸的思考。",
            "site_avatar": "https://r2.eltr.ac/geedeapro/header.avif",
            "is_active": true
        },
        {
            "site_name": "优世界",
            "site_url": "https://usj.cc/",
            "site_description": "喜欢折腾博客、制作主题、分享前端技术的独立开发者。",
            "site_avatar": "#",
            "is_active": true
        },
        {
            "site_name": "Obaby",
            "site_url": "https://zhongxiaojie.com/",
            "site_description": "黑客程序媛 / 逆向工程师 / 人工智能学徒 / 用爱发电的独立开发者",
            "site_avatar": "https://zhongxiaojie.com/wp-content/uploads/2025/05/WechatIMG1530.jpg",
            "is_active": true
        },
        {
            "site_name": "1900 blog",
            "site_url": "https://1900.live",
            "site_description": "孤独的互联网冲浪大师",
            "site_avatar": "https://1900.live/logo.svg",
            "is_active": true
        },
        {
            "site_name": "老张博客",
            "site_url": "https://laozhang.org",
            "site_description": "生活琐记，技术折腾，乐在记录点滴与分享",
            "site_avatar": "http://pic.laozhang.org/i/2023/04/07/642f72584c9a1.png",
            "is_active": true
        },
        {
            "site_name": "老刘博客",
            "site_url": "https://liulu.org",
            "site_description": "热爱传统文化，验光师",
            "site_avatar": "https://liulu.org/img/avatar_hu_d283e3d89b102ad6.png",
            "is_active": true
        },
        {
            "site_name": "似水流年",
            "site_url": "https://my1981.cn",
            "site_description": "如花美眷，怎敌得过似水流年",
            "site_avatar": "https://weavatar.com/avatar/65cd1f488c1cc0949b34d3cd2acad0cb5a2b8c362ebf31cae9e0dc9edcc63e81?s=100&r=g",
            "is_active": true
        },
        {
            "site_name": "陈锐-响石潭",
            "site_url": "https://www.chenrui.com",
            "site_description": "记录活着",
            "site_avatar": "https://www.chenrui.com/zb_users/upload/2026/01/202601030805431176737543.png",
            "is_active": true
        },
        {
            "site_name": "皇家园林",
            "site_url": "https://hjyl.org",
            "site_description": "网页中的诗意与宁静",
            "site_avatar": "https://img.hjyl.org/uploads/2019/10/about-me.png",
            "is_active": true
        },
        {
            "site_name": "荒野菲克",
            "site_url": "https://ficor.net",
            "site_description": "在路上的思绪与脚印",
            "site_avatar": "https://img.ficor.net/uploads/2026/01/6960704808a61.webp",
            "is_active": true
        },
        {
            "site_name": "静·夜·思",
            "site_url": "https://blog.ficor.net",
            "site_description": "网页中的诗意与宁静",
            "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
            "is_active": true
        },
        {
            "site_name": "ACEVS",
            "site_url": "https://acevs.com",
            "site_description": "你坚持过什么事情？",
            "site_avatar": "https://cravatar.cn/avatar/ffc1ac2ecde17b2eb1caff3e94c119dfdaea4dc1a947a08a3092b388bf9b454d0?s=32&d=identicon&r=g",
            "is_active": true
        },
        {
            "site_name": "我是军爸",
            "site_url": "https://me.xu19.com",
            "site_description": "记录单片机编程教学、生活与成长点滴",
            "site_avatar": "https://cravatar.cn/avatar/6e68e8e773b5d7dd15d86d97bbb3561",
            "is_active": true
        },
        {
            "site_name": "瓦匠不舟",
            "site_url": "https://airy.ink",
            "site_description": "大家都是倔强的人",
            "site_avatar": "https://cravatar.cn/avatar/060afceaea08afc40f8bcef99fe8542a",
            "is_active": true
        },
        {
            "site_name": "Yang's Blog",
            "site_url": "https://knay.net",
            "site_description": "一面三分地，记录生活，分享见闻",
            "site_avatar": "https://knay.net/avatar/yang.webp",
            "is_active": true
        },
        {
            "site_name": "雅余",
            "site_url": "https://yayu.net",
            "site_description": "茶余饭后，闲雅精致",
            "site_avatar": "https://yayu.net/wp-content/themes/yayu/assets/images/icon.png",
            "is_active": true
        },
        {
            "site_name": "灰常记忆",
            "site_url": "https://bestcherish.com",
            "site_description": "记录生活 珍藏回忆",
            "site_avatar": "https://bestcherish.com/image/favicon.svg",
            "is_active": true
        },
        {
            "site_name": "韩情脉脉",
            "site_url": "https://www.hxy.cc",
            "site_description": "任何记录都是为了以后有迹可循",
            "site_avatar": "https://www.hxy.cc/ico.png",
            "is_active": true
        },
        {
            "site_name": "全局变量",
            "site_url": "https://ilogs.cn",
            "site_description": "记录生活中的平凡事",
            "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601086.webp",
            "is_active": true
        },
        {
            "site_name": "黑桃三",
            "site_url": "https://heitaosan.com",
            "site_description": "有梦想的人，永远年轻",
            "site_avatar": "https://cravatar.com/avatar/afcb22121b3785f83e89cb3c63e4d020",
            "is_active": true
        },
        {
            "site_name": "缓坡日记",
            "site_url": "https://amr.me",
            "site_description": "网页中的诗意与宁静",
            "site_avatar": "https://thirdqq.qlogo.cn/g?b=qq&k=160860446&s=100",
            "is_active": true
        },
        {
            "site_name": "品味苏州",
            "site_url": "https://pwsz.com",
            "site_description": "生活在人间天堂",
            "site_avatar": "https://pwsz.com/myimg/pwsz_logo.png",
            "is_active": true
        },
        {
            "site_name": "徐建伟",
            "site_url": "http://www.xulog.cn",
            "site_description": "记录生活 珍藏回忆",
            "site_avatar": "",
            "is_active": true
        },
        {
            "site_name": "崔话记",
            "site_url": "https://cuixiping.com",
            "site_description": "向着理想的方向，爬一会儿，躺一会儿",
            "site_avatar": "https://cuixiping.com/blog/logo_cat.svg",
            "is_active": true
        },
        {
            "site_name": "周天记",
            "site_url": "https://zhoutian.com",
            "site_description": "记录生活里的小美好",
            "site_avatar": "https://bu.dusays.com/2023/01/29/63d5bf7fa0dzc.png",
            "is_active": true
        },
        {
            "site_name": "木竹",
            "site_url": "https://www.laomuzhu.cn",
            "site_description": "在字里行间慢慢生长",
            "site_avatar": "https://www.laomuzhu.cn/img/touxiang.jpg",
            "is_active": true
        },
        {
            "site_name": "三十海河",
            "site_url": "https://ihahe.cn",
            "site_description": "扩大自己的自由边界",
            "site_avatar": "https://ihahe.cn/wp-content/uploads/2025/03/touxiang.png",
            "is_active": true
        },
        {
            "site_name": "彬红茶",
            "site_url": "https://note.redcha.cn",
            "site_description": "生活原本沉闷，但跑起来就有风",
            "site_avatar": "https://note.redcha.cn/upload/favicon-256x256.png",
            "is_active": true
        },
        {
            "site_name": "皮皮社",
            "site_url": "https://www.pipishe.com",
            "site_description": "皮一下很开心",
            "site_avatar": "https://www.pipishe.com/tx.webp",
            "is_active": true
        },
        {
            "site_name": "Jack's Space",
            "site_url": "https://veryjack.com",
            "site_description": "Everything happens for the best",
            "site_avatar": "https://veryjack.com/wp-content/uploads/2025/05/avatar_transparent.webp",
            "is_active": true
        },
        {
            "site_name": "旺东自留地",
            "site_url": "https://wang618.cn",
            "site_description": "网页中的诗意与宁静",
            "site_avatar": "https://wang618.cn/logo.gif",
            "is_active": true
        },
        {
            "site_name": "朱小呆",
            "site_url": "https://zhujay.com",
            "site_description": "记录生活分享美好",
            "site_avatar": "https://zhujay.com/images/webhead/wh2.png",
            "is_active": true
        },
        {
            "site_name": "西风",
            "site_url": "https://xifeng.net",
            "site_description": "源于热爱而去创造",
            "site_avatar": "https://xifeng.net/images/avatar.svg",
            "is_active": true
        },
        {
            "site_name": "且听书吟",
            "site_url": "https://yufan.me",
            "site_description": "诗与梦想的远方",
            "site_avatar": "https://yufan.me/logo.svg",
            "is_active": true
        },
        {
            "site_name": "旅行漫记",
            "site_url": "https://synyan.cn",
            "site_description": "博物爱好者",
            "site_avatar": "https://synyan.cn/wp-content/themes/hera-develop/build/images/logo.png",
            "is_active": true
        },
        {
            "site_name": "竹炉山房",
            "site_url": "https://synyan.cn",
            "site_description": "旅游打卡玩",
            "site_avatar": "https://synyan.cn/wp-content/themes/hera-develop/build/images/logo.png",
            "is_active": true
        },
        {
            "site_name": "笔记星球",
            "site_url": "https://note-star.cn",
            "site_description": "网页中的诗意与宁静",
            "site_avatar": "https://note-star.cn/shortcut/logo.ico",
            "is_active": true
        },
        {
            "site_name": "燕渡寒潭",
            "site_url": "https://hisherry.com",
            "site_description": "别为活命而败坏生存之报",
            "site_avatar": "https://cravatar.cn/avatar/c822f896a4408073a0845eb6a1ead02d72859e9e0273df3280669db895165123s=42&r=g",
            "is_active": true
        },
        {
            "site_name": "我心向阳",
            "site_url": "https://www.hollowman.cn",
            "site_description": "看清生活的真相后依然热爱生活",
            "site_avatar": "https://www.hollowman.cn/favicon.png",
            "is_active": true
        },
        {
            "site_name": "梦幻如风",
            "site_url": "https://www.mhcf.net",
            "site_description": "壹个永恒的部落格",
            "site_avatar": "https://www.mhcf.net/mhcf.ico",
            "is_active": true
        },
        {
            "site_name": "Counting Stars ⚭",
            "site_url": "https://hux.ink",
            "site_description": "欲买桂花同载酒，终不似，少年游",
            "site_avatar": "https://www.gravatar.com/avatar/d44fe3444f5b822fe55c92d04b874cbad2e22badd866c8a462d71afb0e88e69b5d=letter&letter=%E8%90%BD",
            "is_active": true
        },
        {
            "site_name": "老T博客",
            "site_url": "https://lawtee.com",
            "site_description": "聚焦法律、科技和生活",
            "site_avatar": "https://lawtee.com/images/favicon.png",
            "is_active": true
        },
        {
            "site_name": "蒙需",
            "site_url": "https://jiangcl.com",
            "site_description": "律师",
            "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
            "is_active": true
        },
        {
            "site_name": "破袜子",
            "site_url": "https://pewae.com",
            "site_description": "一个脱离不了低级趣味的人",
            "site_avatar": "https://pewae.com/wp-content/uploads/cropped-logo-20251231-1-278x270.png",
            "is_active": true
        },
        {
            "site_name": "Keyle's Blog",
            "site_url": "https://vrast.cn",
            "site_description": "记录一些偶尔冒出来转瞬就会忘的灵感",
            "site_avatar": "https://vrast.cn/favicon.ico",
            "is_active": true
        },
        {
            "site_name": "孤鬥",
            "site_url": "https://d-d.design",
            "site_description": "做自己，不随波逐流，不妥协",
            "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
            "is_active": true
        }
    ] as LinkItem[],

    // 博客聚合平台
    blogAggregations: [
        {
            "site_name": "BlogFinder",
            "site_url": "https://bf.zzxworld.com/",
            "site_description": "聚合优秀的个人博客，发掘优质的个人博客文章和内容。"
        },
        {
            "site_name": "BlogsClub",
            "site_url": "https://www.blogsclub.org/apply.html?inviteCode=8f2cd654",
            "site_description": "致力于为每一位博主提供一个展示自我、互动交流的绝佳平台。"
        },
        {
            "site_name": "若梦博客",
            "site_url": "https://www.rmbk.cc/",
            "site_description": "每一个博客，都是精神的驿站。我们不同行，但彼此照亮。在此驻足，便积蓄前行的力量。"
        },
        {
            "site_name": "十年之约",
            "site_url": "https://www.foreverblog.cn/",
            "site_description": "一个人的寂寞，一群人的狂欢"
        },
        {
            "site_name": "笔墨迹",
            "site_url": "https://blogscn.fun/",
            "site_description": "致敬还在写博客的我们"
        },
        {
            "site_name": "朋友们的博客",
            "site_url": "https://peng.you/",
            "site_description": "每一个博客，都是精神的驿站。"
        },
        {
            "site_name": "博客星球",
            "site_url": "https://www.blogplanet.cn/",
            "site_description": "每一个博客都是一个独立星球！"
        },
        {
            "site_name": "FindBlog",
            "site_url": "https://www.findblog.net/",
            "site_description": "发现有趣的独立博客"
        },
        {
            "site_name": "个站商店",
            "site_url": "https://storeweb.cn/",
            "site_description": "一个精致的，带社交元素的个人网站发布平台，博客收录网站"
        }
    ] as LinkItem[]
};

export default linksConfig;