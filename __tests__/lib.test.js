const { generateResult } = require('../js/lib.js');

test("testing generate result function", () => {
    expect(generateResult('1', "This is testing...")).toBe("User ID: 1 created an article titled This is testing...");
})

