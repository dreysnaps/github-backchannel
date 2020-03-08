const { get } = require("lodash");
const { octokit } = require("../lib/octokit");
const { HTTPException } = require("../lib/HTTPException");

const debug = require("debug")("xendit:middleware:validateOrg");

/**
 * Middleware that checks if org exists in github. Throws exception if it does not.
 */
exports.validateOrg = async function(req, res, next) {
  try {
    const org = get(req, "params.org", null);
    if (!org) {
      throw HTTPException("Bad Request", 400);
    }

    try {
      await octokit.orgs.get({ org: org });
    } catch (err) {
      throw HTTPException("Organization not found", 404);
    }
    next();
  } catch (err) {
    debug(err);
    throw err;
  }
};
