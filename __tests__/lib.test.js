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