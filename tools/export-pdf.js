const path = require("path");
const { chromium } = require("playwright");

async function run() {
  const root = path.resolve(__dirname, "..");
  const inputHtml = path.join(root, "index.html");
  const outputPdf = path.join(root, "OfficeGuard_Proposal.pdf");
  const fileUrl = `file:///${inputHtml.replace(/\\/g, "/")}`;

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1200 },
    deviceScaleFactor: 2
  });

  await page.goto(fileUrl, { waitUntil: "load" });
  await page.emulateMedia({ media: "screen" });
  await page.waitForTimeout(800);

  await page.pdf({
    path: outputPdf,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "8mm", right: "8mm", bottom: "8mm", left: "8mm" }
  });

  await browser.close();
  console.log(`PDF generated: ${outputPdf}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
