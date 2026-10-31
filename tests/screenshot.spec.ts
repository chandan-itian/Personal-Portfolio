import { test } from "@playwright/test";

test("Capture high-fidelity screenshots of portfolio", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 960 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Screenshot hero section
  await page.screenshot({ path: "public/images/rendered-desktop.png", fullPage: false });

  // Scroll to interactive circles and take screenshot
  await page.locator("#interactive-circles").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: "public/images/rendered-circles.png" });

  // Scroll to about section
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: "public/images/rendered-about.png" });
});
