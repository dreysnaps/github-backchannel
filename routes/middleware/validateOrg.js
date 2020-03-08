const { get } = require("lodash");
const { octokit } = require("../lib/octokit");
const { HTTPError } = require("../lib/HTTPError");

const debug = require("debug")("xendit:middleware:validateOrg");

exports.validateOrg = async function(req, res, next) {
  try {
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
  } catch (err) {
    debug(err);
    throw err;
  }
};
