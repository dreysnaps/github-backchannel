const { get } = require("lodash");
const { octokit } = require("lib/octokit");
const { HTTPError } = require("lib/HTTPError");

exports.validateOrg = async function(req, res, next) {
  const org = get(req, "params.org", null);
  if (!org) {
    throw HTTPError("Bad Request", 400);
  }

  try {
    await octokit.orgs.get({ org: org });
  } catch (err) {
    throw HTTPError("Organization not found", 404);
  }
  next();
};
