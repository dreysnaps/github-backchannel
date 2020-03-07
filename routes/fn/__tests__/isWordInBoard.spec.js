const { isWordInBoard } = require("../isWordInBoard");

const DEFAULT_BOARD = "T, A, P, *, E, A, K, S, O, B, R, S, S, *, X, D";

describe("Prep Data", () => {
  it("Wait for Dictionary to be populated.", done => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 1000);
  });
});

describe("Check Invalid Words", () => {
  it("Check words which do not exist.", async () => {
    expect(await isWordInBoard(DEFAULT_BOARD, "ahh")).toMatchSnapshot();
    expect(await isWordInBoard(DEFAULT_BOARD, "ha41")).toMatchSnapshot();
  });
  it("Check words whic exists but are too large", async () => {
    expect(
      await isWordInBoard(DEFAULT_BOARD, "authoritarianism")
    ).toMatchSnapshot();
    expect(
      await isWordInBoard(DEFAULT_BOARD, "counterbalancing")
    ).toMatchSnapshot();
  });
});

describe("Check Valid Words", () => {
  it("Check small letter words", async () => {
    expect(await isWordInBoard(DEFAULT_BOARD, "tap")).toMatchSnapshot();
    expect(await isWordInBoard(DEFAULT_BOARD, "eat")).toMatchSnapshot();
  });

  it("Check capitalized words", async () => {
    expect(await isWordInBoard(DEFAULT_BOARD, "TAP")).toMatchSnapshot();
    expect(await isWordInBoard(DEFAULT_BOARD, "eat")).toMatchSnapshot();
  });

  it("Check words with *", async () => {
    expect(await isWordInBoard(DEFAULT_BOARD, "SOX")).toMatchSnapshot();
    expect(await isWordInBoard(DEFAULT_BOARD, "SIX")).toMatchSnapshot();
    expect(await isWordInBoard(DEFAULT_BOARD, "ASS")).toMatchSnapshot();
  });
});
