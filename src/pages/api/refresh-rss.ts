import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { links } from '../../data/links';

const parser = new Parser({
  timeout: 15000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
});

// 从 data/links.ts 文件获取链接数据

async function fetchRSS() {
  const allItems = [];
  let successCount = 0;
  let failCount = 0;
  
  console.log('开始抓取RSS数据...');
  
  for (const link of links) {
    try {
      if (!link.feed) {
        console.log(`Skipping ${link.name} - no feed URL`);
        continue;
      }
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
      console.error(`✗ Failed: ${link.name} - ${error instanceof Error ? error.message : String(error)}`);        
      // 继续处理下一个站点，不中断整个过程
    }
  }
  
  console.log(`\n抓取完成: 成功 ${successCount} 个站点, 失败 ${failCount} 个站点`);
  
  // 按发布时间排序
  allItems.sort((a, b) => {
    const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return dateB - dateA;
  });
  
  // 只保留最新的50条
  const recentItems = allItems.slice(0, 50);
  
  // 保存到 public 目录
  const outputPath = path.join(__dirname, '..', '..', 'public', 'rss-data.json');
  
  try {
    // 确保 public 目录存在
    if (!fs.existsSync(path.join(__dirname, '..', '..', 'public'))) {
      fs.mkdirSync(path.join(__dirname, '..', '..', 'public'), { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(recentItems, null, 2));
    console.log(`\n✓ RSS data saved to ${outputPath}`);
    console.log(`✓ Total items: ${recentItems.length}`);
    
    return {
      success: true,
      data: recentItems,
      message: `成功抓取 ${successCount} 个站点, 失败 ${failCount} 个站点`,
      total: recentItems.length
    };
  } catch (error) {
    console.error(`✗ Failed to save RSS data: ${error instanceof Error ? error.message : String(error)}`);        
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await fetchRSS();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '抓取RSS数据失败',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
