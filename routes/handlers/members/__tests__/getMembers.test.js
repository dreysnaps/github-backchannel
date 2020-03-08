jest.mock("../../../lib/octokit");

const { getMembers } = require("../getMembers");

describe("Check Valid Org", () => {
  it("Check members of org which exist (github)", async () => {
    expect(await getMembers({ params: { org: "github" } })).toMatchSnapshot();
  });
});
