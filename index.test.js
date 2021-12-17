const Game = require('./index.js');

describe("The test environment", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should access game", () => {
    expect(Game).toBeDefined();
  });
});

describe("Your specs...", () => {
  // it ...
});