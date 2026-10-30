const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const f of process.argv.slice(2)) {
    await p.goto('file://' + path.resolve(f));
    await p.waitForTimeout(300);
    await p.screenshot({ path: f.replace('.html', '.png') });
    console.log('ok', f);
  }
  await b.close();
})();
