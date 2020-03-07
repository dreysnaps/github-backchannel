const { isWordInDict } = require("../isWordInDict");

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
    expect(await isWordInDict("ahh")).toMatchSnapshot();
    expect(await isWordInDict("ha41")).toMatchSnapshot();
  });
  it("Check words whic exists but are too large", async () => {
    expect(await isWordInDict("authoritarianism")).toMatchSnapshot();
    expect(await isWordInDict("counterbalancing")).toMatchSnapshot();
  });

});

describe("Check Valid Words", () => {
  it("Check small letter words", async () => {
    expect(await isWordInDict("aah")).toMatchSnapshot();
    expect(await isWordInDict("zoo")).toMatchSnapshot();
  });
  it("Check capitalized words", async () => {
    expect(await isWordInDict("ZOO")).toMatchSnapshot();
    expect(await isWordInDict("PAPAYA")).toMatchSnapshot();
  });
});
