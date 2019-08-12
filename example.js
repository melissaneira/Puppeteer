const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setViewport({
  width: 1200,
  height: 780,
  deviceScaleFactor: 1,
});
  await page.goto('https://example.com');
  
  await page.screenshot({path: 'example.png'});
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.evaluate(() => {debugger;});
  await browser.close();
})();