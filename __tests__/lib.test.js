const { generateResult, validateInput } = require('../js/lib.js');

// unit test for generateResult()
test("testing generate result function", () => {
    expect(generateResult('1', "This is testing...")).toBe("User ID: 1 created an article titled This is testing...");
});

// unit test for validateInput()
test("testing validate input function", () => {
    expect(validateInput(1, true, true)). toBeTruthy();
});