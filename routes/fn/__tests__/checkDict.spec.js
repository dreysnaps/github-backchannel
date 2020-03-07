const { checkDict } = require( '../checkDict');

describe("Check Invalid Words", () => {
  it("Check words which do not exist.", async () => {
    expect(await checkDict("ahh")).toMatchSnapshot();
    expect(await checkDict("ha41")).toMatchSnapshot();
  });
  it("Check words whic exists but are too large", async () => {
    expect(await checkDict("authoritarianism")).toMatchSnapshot();
    expect(await checkDict("counterbalancing")).toMatchSnapshot();
  });

});

describe("Check Valid Words", () => {
  it("Check small letter words", async () => {
    expect(await checkDict("aah")).toMatchSnapshot();
    expect(await checkDict("zoo")).toMatchSnapshot();
  });
  it("Check capitalized words", async () => {
    expect(await checkDict("ZOO")).toMatchSnapshot();
    expect(await checkDict("PAPAYA")).toMatchSnapshot();
  });
});
