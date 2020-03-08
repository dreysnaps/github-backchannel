jest.mock("../../lib/octokit");

const { validateOrg } = require("../validateOrg");
const { HTTPException } = require("../../lib/HTTPException");

describe("Check Invalid Org", () => {
  // Or using async/await.
  it("Should throw exception for org does not exist", async () => {
    try {
      await validateOrg({ params: { org: "ahasdbanhsdkfhc" } }, null, () => {});
    } catch (e) {
      expect(e).toEqual(HTTPException("Organization not found", 404));
    }
  });
});
describe("Check Invalid Parameter", () => {
  // Or using async/await.
  it("Should throw exception for org does not exist", async () => {
    try {
      await validateOrg({}, null, () => {});
    } catch (e) {
      expect(e).toEqual(HTTPException("Bad Request", 400));
    }
  });
});
