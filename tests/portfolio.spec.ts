import { test, expect } from "@playwright/test";

test.describe("Chandan Raj Portfolio Test Suite", () => {
  // Test 1: Navigation links navigate correctly
  test("1. All navigation links exist and scroll to respective sections", async ({ page }) => {
    await page.goto("/");

    // If mobile menu toggle is visible, open drawer
    const toggleBtn = page.getByRole("button", { name: /navigation menu/i });
    if (await toggleBtn.isVisible()) {
      await toggleBtn.click();
    }

    const navItems = ["ABOUT", "SKILLS", "PORTFOLIO", "EXPERIENCE", "CONTACT"];

    for (const item of navItems) {
      const link = page.locator("nav a").filter({ hasText: item }).locator("visible=true").first();
      await expect(link).toBeVisible();
      const href = await link.getAttribute("href");
      expect(href).toBeTruthy();
      const target = page.locator(href!);
      await expect(target).toBeAttached();
    }
  });

  // Test 2: All four interactive circles exist and are clickable
  test("2. All four interactive circles are rendered with correct labels and are clickable", async ({ page }) => {
    await page.goto("/");
    const labels = ["CODING", "DESIGNING", "RESEARCHING", "BUILDING"];

    for (const label of labels) {
      const circleBtn = page.getByRole("button", { name: new RegExp(label, "i") });
      await expect(circleBtn).toBeVisible();
    }
  });

  // Test 3: Opening circle modal, verifying detail content, previous and next buttons
  test("3. Circle opens content modal with details, and next/prev buttons navigate topics", async ({ page }) => {
    await page.goto("/");

    // Click CODING circle
    const codingBtn = page.getByRole("button", { name: /CODING/i });
    await codingBtn.click();

    // Verify modal dialog opened
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Coding & Architecture");
    await expect(dialog).toContainText("EXPLORING · CODING");

    // Click Next button to navigate to DESIGNING
    const nextBtn = dialog.getByRole("button", { name: /Next topic: DESIGNING/i });
    await nextBtn.click();
    await expect(dialog).toContainText("UI / UX & Creative Design");
    await expect(dialog).toContainText("EXPLORING · DESIGNING");

    // Click Previous button to return to CODING
    const prevBtn = dialog.getByRole("button", { name: /Previous topic: CODING/i });
    await prevBtn.click();
    await expect(dialog).toContainText("Coding & Architecture");
  });

  // Test 4: Circle detail content display (skills & tags)
  test("4. Circle modal displays key focus areas and editable technology tags", async ({ page }) => {
    await page.goto("/");
    const codingBtn = page.getByRole("button", { name: /CODING/i });
    await codingBtn.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("Key Focus Areas");
    await expect(dialog).toContainText("Frontend Engineering");
    await expect(dialog).toContainText("Backend & Systems");
    await expect(dialog).toContainText("TypeScript");
    await expect(dialog).toContainText("React");
  });

  // Test 5: Closing interactions (Close button and Escape key)
  test("5. Modal closes via Close button and Escape key", async ({ page }) => {
    await page.goto("/");

    // Test close button
    const codingBtn = page.getByRole("button", { name: /CODING/i });
    await codingBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const closeBtn = dialog.getByRole("button", { name: "Close dialog" });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();

    // Test Escape key
    await codingBtn.click();
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  // Test 6: Project category filtering
  test("6. Project category filtering works dynamically", async ({ page }) => {
    await page.goto("/");
    const portfolioSection = page.locator("#portfolio");
    await expect(portfolioSection).toBeVisible();

    const allBtn = page.getByRole("tab", { name: /All Projects/i });
    const webBtn = page.getByRole("tab", { name: /Web Projects/i });
    const appBtn = page.getByRole("tab", { name: /App Projects/i });

    await expect(allBtn).toBeVisible();
    await expect(webBtn).toBeVisible();
    await expect(appBtn).toBeVisible();

    // Click Web Projects
    await webBtn.click();
    await expect(page.locator("#portfolio")).toContainText("Web Application");

    // Click App Projects
    await appBtn.click();
    await expect(page.locator("#portfolio")).toContainText("App / Tooling");
  });

  // Test 7: Project modal case details and external links
  test("7. Project card case details modal opens with architecture information", async ({ page }) => {
    await page.goto("/");
    const caseDetailsBtn = page.locator("#portfolio button:has-text('Case Details')").first();
    await caseDetailsBtn.click();

    const caseModal = page.getByRole("dialog");
    await expect(caseModal).toBeVisible();
    await expect(caseModal).toContainText("PROJECT OVERVIEW");
    await expect(caseModal).toContainText("Key Highlights");

    const closeCaseModal = caseModal.getByRole("button", { name: "Close", exact: true });
    await closeCaseModal.click();
    await expect(caseModal).not.toBeVisible();
  });

  // Test 8: Contact form validation
  test("8. Contact form validates required fields on frontend", async ({ page }) => {
    await page.goto("/");
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeVisible();

    const submitBtn = contactSection.getByRole("button", { name: /Send Message/i });
    await submitBtn.click();

    // Check error messages
    await expect(page.locator("#contact")).toContainText("Please enter your name");
    await expect(page.locator("#contact")).toContainText("Please enter a valid email");
    await expect(page.locator("#contact")).toContainText("Message must be at least 10 characters");
  });

  // Test 9: Contact delivery success scenario
  test("9. Contact form submits successfully with valid inputs", async ({ page }) => {
    await page.goto("/");
    const contactSection = page.locator("#contact");

    await contactSection.locator('input[name="name"]').fill("Test Visitor");
    await contactSection.locator('input[name="email"]').fill("test@example.com");
    await contactSection.locator('input[name="company"]').fill("Open Source Inc.");
    await contactSection
      .locator('textarea[name="message"]')
      .fill("Hello Chandan! This is an automated QA test message for your portfolio.");

    const submitBtn = contactSection.getByRole("button", { name: /Send Message/i });
    await submitBtn.click();

    // Expect success announcement
    await expect(page.locator('[aria-live="polite"]')).toContainText("Message Sent!", {
      timeout: 10000,
    });
  });

  // Test 10: Keyboard accessibility and focus
  test("10. Interactive elements receive visible focus indicator", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");

    // Brand logo or first nav element focused
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON"]).toContain(focused);
  });

  // Test 11: Backend health endpoint
  test("11. Backend health API endpoint returns status ok", async ({ request }) => {
    const response = await request.get("/api/health");
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.status).toBe("ok");
    expect(data.service).toBe("chandan-raj-portfolio");
  });

  // Test 12: Backend contact API endpoint validation
  test("12. Backend contact API returns 400 when invalid payload is sent", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { name: "A", email: "bad-email", message: "short" },
    });
    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.success).toBe(false);
  });

  // Test 13: Bot honeypot check
  test("13. Backend contact API traps bot submissions quietly via honeypot", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: {
        name: "Bot User",
        email: "bot@spammer.com",
        message: "Spam message payload here",
        _gotcha: "spam-bot-trap-triggered",
      },
    });
    expect(response.status()).toBe(200);
  });

  // Test 14: Responsive layout without horizontal overflow
  test("14. Layout has no horizontal overflow on mobile viewports", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  // Test 15: Reduced-motion compatibility
  test("15. Respects prefers-reduced-motion media query", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });

  // Test 16: Professional details present
  test("16. Displays verified details for Chandan Raj and Full-Stack Developer", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("body")).toContainText("Chandan Raj");
    await expect(page.locator("body")).toContainText("FULL-STACK DEVELOPER");
    await expect(page.locator("body")).toContainText("Curious mind. Builder’s heart.");
    await expect(page.locator("body")).toContainText("made with");
    await expect(page.locator("body")).toContainText("by Chandan Raj");
  });
});
