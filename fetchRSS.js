const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
});

// 从 data/links.ts 文件获取链接数据
const linksData = require('./src/data/links.ts');
const links = linksData.links;

async function fetchRSS() {
  const allItems = [];
  let successCount = 0;
  let failCount = 0;
  
  console.log('开始抓取RSS数据...');
  
  for (const link of links) {
    try {
      console.log(`Fetching: ${link.name} - ${link.feed}`);
      const feed = await parser.parseURL(link.feed);
      
      // 只取最新的5条
      const items = feed.items.slice(0, 5).map(item => ({
        name: link.name,
        url: link.url,
        avatar: link.avatar,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate || item.isoDate,
        content: item.contentSnippet || item.content || ''
      }));
      
      allItems.push(...items);
      successCount++;
      console.log(`✓ Success: ${link.name} - ${items.length} items`);
    } catch (error) {
      failCount++;
      console.error(`✗ Failed: ${link.name} - ${error.message}`);
      // 继续处理下一个站点，不中断整个过程
    }
  }
  
  console.log(`\n抓取完成: 成功 ${successCount} 个站点, 失败 ${failCount} 个站点`);
  
  // 按发布时间排序
  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  // 只保留最新的50条
  const recentItems = allItems.slice(0, 50);
  
  // 保存到 public 目录
  const outputPath = path.join(__dirname, 'public', 'rss-data.json');
  
  try {
    // 确保 public 目录存在
    if (!fs.existsSync(path.join(__dirname, 'public'))) {
      fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(recentItems, null, 2));
    console.log(`\n✓ RSS data saved to ${outputPath}`);
    console.log(`✓ Total items: ${recentItems.length}`);
  } catch (error) {
    console.error(`✗ Failed to save RSS data: ${error.message}`);
    throw error; // 保存失败时抛出错误
  }
}

// 博客聚合平台
export const blogAggregations = [
    {
        "name": "BlogFinder",
        "url": "https://bf.zzxworld.com/",
        "description": "聚合优秀的个人博客，发掘优质的个人博客文章和内容。"
    },
    {
        "name": "BlogsClub",
        "url": "https://www.blogsclub.org/apply.html?inviteCode=8f2cd654",
        "description": "致力于为每一位博主提供一个展示自我、互动交流的绝佳平台。"
    },
    {
        "name": "若梦博客",
        "url": "https://www.rmbk.cc/",
        "description": "每一个博客，都是精神的驿站。我们不同行，但彼此照亮。在此驻足，便积蓄前行的力量。"
    },
    {
        "name": "十年之约",
        "url": "https://www.foreverblog.cn/",
        "description": "一个人的寂寞，一群人的狂欢"
    },
    {
        "name": "笔墨迹",
        "url": "https://blogscn.fun/",
        "description": "致敬还在写博客的我们"
    },
    {
        "name": "朋友们的博客",
        "url": "https://peng.you/",
        "description": "每一个博客，都是精神的驿站。"
    },
    {
        "name": "博客星球",
        "url": "https://www.blogplanet.cn/",
        "description": "每一个博客都是一个独立星球！"
    },
    {
        "name": "FindBlog",
        "url": "https://www.findblog.net/",
        "description": "发现有趣的独立博客"
    },
    {
        "name": "个站商店",
        "url": "https://storeweb.cn/",
        "description": "一个精致的，带社交元素的个人网站发布平台，博客收录网站"
    }
];

// 执行并确保脚本正确退出
fetchRSS()
  .then(() => {
    console.log('\n✓ 脚本执行成功');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n✗ 脚本执行失败:', error);
    process.exit(1);
  });