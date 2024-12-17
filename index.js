const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

  // Get type of source from process.argv, default to url
    var htmlFilePath = "Resume-Latest.html"

  // Create a browser instance
    const browser = await puppeteer.launch();

  // Create a new page
    const page = await browser.newPage();

    const html = fs.readFileSync(htmlFilePath, 'utf8');
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

  // Downlaod the PDF
    const pdf = await page.pdf({
        path: `Resume-Latest.pdf`,
        printBackground: true,
        format: 'A4',
    });

  // Close the browser instance
    await browser.close();
  
})();

