const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

// Unit test
test("Should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

// Integration test
test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("Should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // Speed up the testing:
    // slowMo: 80,
    // args: ["--window-size=800,600"],
  });

  const page = await browser.newPage();
  await page.goto(
    "file:///home/daniel/Codes/GitHub/learning-unit-testing/Unit Tests, Integration Tests adn e2e Tests (Academind)/testing-tutorial/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");

  const finalText = await page.$eval(
    ".user-item",
    (element) => element.textContent
  );
  expect(finalText).toBe("Anna (28 years old)");
}, 10000); // Defines 10 seconds to the browser complete the actions
