const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
});

// 硬编码链接数据
const links = [
  {
    "site_name": "荒野菲克",
    "site_url": "https://ficor.net",
    "site_description": "在路上的思绪与脚印",
    "site_avatar": "https://img.ficor.net/uploads/2026/01/6960704808a61.webp",
    "feed": "https://ficor.net/feed",
    "is_active": true
  },
  {
    "site_name": "静·夜·思",
    "site_url": "https://blog.ficor.net",
    "site_description": "网页中的诗意与宁静",
    "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
    "feed": "https://blog.ficor.net/feed",
    "is_active": true
  },
  {
    "site_name": "ACEVS",
    "site_url": "https://acevs.com",
    "site_description": "你坚持过什么事情？",
    "site_avatar": "https://cravatar.cn/avatar/ffc1ac2ecde17b2eb1caff3e94c119fdaea4dc1a947a08a3092b388bf9b454d0?s=32&d=identicon&r=g",
    "feed": "https://acevs.com/feed",
    "is_active": true
  },
  {
    "site_name": "我是军爸",
    "site_url": "https://me.xu19.com",
    "site_description": "记录单片机编程教学、生活与成长点滴",
    "site_avatar": "https://cravatar.cn/avatar/6e688e8773b5bd7dd15d86d97bbb3561",
    "feed": "https://me.xu19.com/feed",
    "is_active": true
  },
  {
    "site_name": "瓦匠不舟",
    "site_url": "https://airy.ink",
    "site_description": "大家都是倔强的人",
    "site_avatar": "https://cravatar.cn/avatar/060afceaea08afc40f8bcef99fe8542a",
    "feed": "https://airy.ink/feed",
    "is_active": true
  },
  {
    "site_name": "Yang's Blog",
    "site_url": "https://knay.net",
    "site_description": "一亩三分地，记录生活，分享见闻",
    "site_avatar": "https://knay.net/avatar/yang.webp",
    "feed": "https://knay.net/feed",
    "is_active": true
  },
  {
    "site_name": "旺东自留地",
    "site_url": "https://wang618.cn",
    "site_description": "网页中的诗意与宁静",
    "site_avatar": "https://wang618.cn/logo.gif",
    "feed": "https://wang618.cn/rss.php",
    "is_active": true
  },
  {
    "site_name": "朱小呆",
    "site_url": "https://zhujay.com",
    "site_description": "记录生活分享美好",
    "site_avatar": "https://zhujay.com/images/webhead/wh2.png",
    "feed": "https://zhujay.com/feed",
    "is_active": true
  },
  {
    "site_name": "西风",
    "site_url": "https://xifeng.net",
    "site_description": "源于热爱而去创造",
    "site_avatar": "https://xifeng.net/images/avatar.svg",
    "feed": "https://xifeng.net/feed",
    "is_active": true
  },
  {
    "site_name": "且听书吟",
    "site_url": "https://yufan.me",
    "site_description": "诗与梦想的远方",
    "site_avatar": "https://yufan.me/logo.svg",
    "feed": "https://yufan.me/feed",
    "is_active": true
  },
  {
    "site_name": "旅行漫记",
    "site_url": "https://synyan.cn",
    "site_description": "博物馆爱好者",
    "site_avatar": "https://synyan.cn/wp-content/themes/hera-develop/build/images/logo.png",
    "feed": "https://synyan.cn/feed",
    "is_active": true
  },
  {
    "site_name": "竹炉山房",
    "site_url": "https://synyan.cn/t",
    "site_description": "旅游点打卡员",
    "site_avatar": "https://synyan.cn/wp-content/themes/hera-develop/build/images/logo.png",
    "feed": "https://synyan.cn/t/feed",
    "is_active": true
  },
  {
    "site_name": "1900'Blog",
    "site_url": "https://1900.live",
    "site_description": "孤独的互联网冲浪大师",
    "site_avatar": "https://1900.live/logo.svg",
    "feed": "https://1900.live/rss",
    "is_active": true
  },
  {
    "site_name": "老张博客",
    "site_url": "https://laozhang.org",
    "site_description": "生活琐记，技术折腾，乐在记录点滴与分享",
    "site_avatar": "http://pic.laozhang.org/i/2023/04/07/642f72584c9a1.png",
    "feed": "https://laozhang.org/feed",
    "is_active": true
  },
  {
    "site_name": "老刘博客",
    "site_url": "https://iliu.org",
    "site_description": "热爱传统文化，验光师",
    "site_avatar": "https://iliu.org/img/avatar_hu_d283e3d89b102ad6.png",
    "feed": "https://iliu.org/index.xml",
    "is_active": true
  },
  {
    "site_name": "似水流年",
    "site_url": "https://my1981.cn",
    "site_description": "如花美眷，怎敌得过似水流年",
    "site_avatar": "https://weavatar.com/avatar/65cd1f408c1cc0949b34d3cd2acad0cb5a2b8c362ebf31ca9ee0dc9edcc63e81?s=100&r=g",
    "feed": "https://my1981.cn/feed",
    "is_active": true
  },
  {
    "site_name": "陈锐—响石潭",
    "site_url": "https://www.chenrui.com",
    "site_description": "记录活着",
    "site_avatar": "https://www.chenrui.com/zb_users/upload/2026/01/20260103005431176737287110422.png",
    "feed": "https://www.chenrui.com/feed.php",
    "is_active": true
  },
  {
    "site_name": "皇家园林",
    "site_url": "https://hjyl.org",
    "site_description": "网页中的诗意与宁静",
    "site_avatar": "https://img.hjyl.org/uploads/2019/10/about-me.png",
    "feed": "https://hjyl.org/feed",
    "is_active": true
  },
  {
    "site_name": "子夜松声",
    "site_url": "https://xyzbz.cn",
    "site_description": "互联网爱好者",
    "site_avatar": "https://cn.cravatar.com/avatar/120340d1df519f4e28613fe5d404b286?s=96&d=mp&r=g",
    "feed": "https://xyzbz.cn/feed",
    "is_active": true
  },
  {
    "site_name": "Counting Stars💫",
    "site_url": "https://hux.ink",
    "site_description": "欲买桂花同载酒，终不似，少年游",
    "site_avatar": "https://weavatar.com/avatar/d44fe4344f5b822fe55c92d04b874cbad2e22babd866c8a462d71afb0e86e9b5?d=letter&letter=%E8%90%BD",
    "feed": "https://hux.ink/index.xml",
    "is_active": true
  },
  {
    "site_name": "老T博客",
    "site_url": "https://lawtee.com",
    "site_description": "聚焦法律、科技和生活",
    "site_avatar": "https://lawtee.com/images/favicon.png",
    "feed": "https://lawtee.com/index.xml",
    "is_active": true
  },
  {
    "site_name": "蒙需",
    "site_url": "https://jiangcl.com",
    "site_description": "律师",
    "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
    "feed": "https://jiangcl.com/feed",
    "is_active": true
  },
  {
    "site_name": "破袜子",
    "site_url": "https://pewae.com",
    "site_description": "一个脱离不了低级趣味的人",
    "site_avatar": "https://pewae.com/wp-content/uploads/cropped-logo-20251231-1-270x270.png",
    "feed": "https://pewae.com/feed",
    "is_active": true
  },
  {
    "site_name": "Keyle's Blog",
    "site_url": "https://vrast.cn",
    "site_description": "记录一些偶尔冒出来转眼就会忘的灵感",
    "site_avatar": "https://vrast.cn/favicon.ico",
    "feed": "https://vrast.cn/atom.xml",
    "is_active": true
  },
  {
    "site_name": "孤鬥",
    "site_url": "https://d-d.design",
    "site_description": "做自己，不隨波逐流，不妥協",
    "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
    "feed": "https://d-d.design/feed",
    "is_active": true
  },
  {
    "site_name": "木竹",
    "site_url": "https://www.laomuzhu.cn",
    "site_description": "在字里行间慢慢生长",
    "site_avatar": "https://www.laomuzhu.cn/img/touxiang.jpg",
    "feed": "https://www.laomuzhu.cn/feed",
    "is_active": true
  },
  {
    "site_name": "三十海河",
    "site_url": "https://ihaihe.cn",
    "site_description": "扩大自己的自由边界",
    "site_avatar": "https://ihaihe.cn/wp-content/uploads/2025/03/touxiang.png",
    "feed": "https://ihaihe.cn/feed",
    "is_active": true
  },
  {
    "site_name": "彬红茶日记",
    "site_url": "https://note.redcha.cn",
    "site_description": "生活原本沉闷，但跑起来就有风",
    "site_avatar": "https://note.redcha.cn/upload/favicon-256x256.png",
    "feed": "https://note.redcha.cn/feed",
    "is_active": true
  },
  {
    "site_name": "obaby@mars",
    "site_url": "https://zhongxiaojie.com",
    "site_description": "黑客程序媛",
    "site_avatar": "https://gg.lang.bi/avatar/d6ebc088df916bcc9e8b94a09f9b0f604e57be54b04bd520c6db2492740fc563?s=90&d=identicon&r=r",
    "feed": "https://zhongxiaojie.com/feed",
    "is_active": true
  },
  {
    "site_name": "皮皮社",
    "site_url": "https://www.pipishe.com",
    "site_description": "皮一下~很开心",
    "site_avatar": "https://www.pipishe.com/tx.webp",
    "feed": "https://www.pipishe.com/feed",
    "is_active": true
  },
  {
    "site_name": "Jack's Space",
    "site_url": "https://veryjack.com",
    "site_description": "Everything happens for the best",
    "site_avatar": "https://veryjack.com/wp-content/uploads/2025/05/avatar_transparent.webp",
    "feed": "https://veryjack.com/feed",
    "is_active": true
  },
  {
    "site_name": "雅余",
    "site_url": "https://yayu.net",
    "site_description": "茶余饭后，闲情雅致",
    "site_avatar": "https://yayu.net/wp-content/themes/yayu/assets/images/icon.png",
    "feed": "https://yayu.net/feed",
    "is_active": true
  },
  {
    "site_name": "灰常记忆",
    "site_url": "https://bestcherish.com",
    "site_description": "记录生活 珍藏回忆",
    "site_avatar": "https://bestcherish.com/image/favicon.svg",
    "feed": "https://bestcherish.com/feed",
    "is_active": true
  },
  {
    "site_name": "韩情脉脉",
    "site_url": "https://www.hxy.cc",
    "site_description": "任何记录都是为了让以后有迹可循",
    "site_avatar": "https://www.hxy.cc/ico.png",
    "feed": "https://www.hxy.cc/feed",
    "is_active": true
  },
  {
    "site_name": "全局变量",
    "site_url": "https://ilogs.cn",
    "site_description": "记录生活中的平凡事",
    "site_avatar": "https://img.ficor.net/uploads/2025/11/6914480601006.webp",
    "feed": "https://ilogs.cn/feed",
    "is_active": true
  },
  {
    "site_name": "黑桃三",
    "site_url": "https://heitaosan.com",
    "site_description": "有梦想的人，永远年轻",
    "site_avatar": "https://cn.cravatar.com/avatar/afcb21221b3785f83e89cb3c63ed4020",
    "feed": "https://heitaosan.com/feed",
    "is_active": true
  },
  {
    "site_name": "缓坡日记",
    "site_url": "https://amrx.me",
    "site_description": "网页中的诗意与宁静",
    "site_avatar": "https://thirdqq.qlogo.cn/g?b=qq&nk=160860446&s=100",
    "feed": "https://amrx.me/feed",
    "is_active": true
  },
  {
    "site_name": "笔记星球",
    "site_url": "https://note-star.cn",
    "site_description": "网页中的诗意与宁静",
    "site_avatar": "https://note-star.cn/shortcut/logo.ico",
    "feed": "https://note-star.cn/feed",
    "is_active": true
  },
  {
    "site_name": "燕渡寒潭",
    "site_url": "https://hisherry.com",
    "site_description": "别为活命而败坏生存之根",
    "site_avatar": "https://cravatar.cn/avatar/c822f896a44080703a0845eb6a1ead02d72859e9e0273df32806698db9516512?s=42&r=g",
    "feed": "https://hisherry.com/feed",
    "is_active": true
  },
  {
    "site_name": "我心向阳",
    "site_url": "https://www.hollowman.cn",
    "site_description": "看清生活的真相后依然热爱生活",
    "site_avatar": "https://www.hollowman.cn/favicon.png",
    "feed": "https://www.hollowman.cn/feed",
    "is_active": true
  },
  {
    "site_name": "莫比乌斯",
    "site_url": "https://onojyun.com",
    "site_description": "写作，是一场自我悖驳的旅程",
    "site_avatar": "https://onojyun.com/wp-content/uploads/2024/03/a2d42-cropped-mobius_icon_black-edited.png",
    "feed": "https://onojyun.com/feed",
    "is_active": true
  },
  {
    "site_name": "梦幻辰风",
    "site_url": "https://www.mhcf.net",
    "site_description": "壹个永恒的部落格",
    "site_avatar": "https://www.mhcf.net/mhcf.ico",
    "feed": "https://www.mhcf.net/feed",
    "is_active": true
  },
  {
    "site_name": "品味苏州",
    "site_url": "https://pwsz.com",
    "site_description": "生活在人间天堂",
    "site_avatar": "https://pwsz.com/myimg/pwsz_logo.png",
    "feed": "https://pwsz.com/feed",
    "is_active": true
  },
  {
    "site_name": "徐建伟",
    "site_url": "http://www.xulog.cn",
    "site_description": "记录生活 珍藏回忆",
    "site_avatar": "",
    "feed": "http://www.xulog.cn/index.php?act=rss",
    "is_active": true
  },
  {
    "site_name": "崔话记",
    "site_url": "https://cuixiping.com",
    "site_description": "向着理想的方向，爬一会儿，躺一会儿",
    "site_avatar": "https://cuixiping.com/logo-cat.svg",
    "feed": "https://cuixiping.com/blog/feed/atom/",
    "is_active": true
  },
  {
    "site_name": "周天记",
    "site_url": "https://zhoutian.com",
    "site_description": "记录生活里的小美好",
    "site_avatar": "https://bu.dusays.com/2023/01/29/63d5bf7fa0d2c.png",
    "feed": "https://zhoutian.com/rss.xml",
    "is_active": true
  }
];

async function fetchRSS() {
  const allItems = [];
  
  for (const link of links) {
    try {
      console.log(`Fetching: ${link.site_name} - ${link.feed}`);
      const feed = await parser.parseURL(link.feed);
      
      // 只取最新的5条
      const items = feed.items.slice(0, 5).map(item => ({
        site_name: link.site_name,
        site_url: link.site_url,
        site_avatar: link.site_avatar,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate || item.isoDate,
        content: item.contentSnippet || item.content || ''
      }));
      
      allItems.push(...items);
      console.log(`✓ Success: ${link.site_name} - ${items.length} items`);
    } catch (error) {
      console.error(`✗ Failed: ${link.site_name} - ${error.message}`);
    }
  }
  
  // 按发布时间排序
  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  // 只保留最新的50条
  const recentItems = allItems.slice(0, 50);
  
  // 保存到 public 目录
  const outputPath = path.join(__dirname, 'public', 'rss-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(recentItems, null, 2));
  
  console.log(`\n✓ RSS data saved to ${outputPath}`);
  console.log(`✓ Total items: ${recentItems.length}`);
}

fetchRSS().catch(console.error);