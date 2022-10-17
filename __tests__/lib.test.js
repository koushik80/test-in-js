//jest.mock('../js/postToServer.js');

const puppeteer = require('puppeteer');
const { generateResult, validateInput, checkAndGenerate } = require('../js/lib.js');

// unit test for generateResult()
test("testing generate result function", () => {
    expect(generateResult('1', "This is testing...")).toBe("User ID: 1 created an article titled This is testing...");
});

// unit test for validateInput()
test("testing validate input function", () => {
    expect(validateInput(1, true, true)).toBeTruthy();
});

// integration test for checkAndGenerate()

test("testing check and generate function", async () => {
    const result = await checkAndGenerate(1, "Title 1", "This is a test");
    expect(result).toBe("User ID: 1 created an article titled Title 1");
});

// end to end testing for addPost()

//test("checking e2e for addPost", async (done) => {
    //const browser = await puppeteer.launch({
        //headless: false,
        //slowMo: 80,
        //args: ["--window-size=1920,1080"],
    //});
    //const page = await browser.newPage();
    //await page.goto("http://127.0.0.1:5500/");
    //await page.click('input#userid');
    //await page.type('input#userid', '1');
    //await page.click('input#title');
    //await page.type('input#title', 'Article 1');
    //await page.click('textarea#article');
    //await page.type('textarea#article', 'Article 1 description');
    //await page.click('#addNewPostBtn');
    //await browser.close();
    //done();
//}, 20000)