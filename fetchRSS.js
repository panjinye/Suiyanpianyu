const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
});

// 从 links.ts 导入数据
const links = require('./src/links.ts').default.links;

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