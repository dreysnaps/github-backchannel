const { octokit } = require("lib/octokit");
const { HTTPError } = require("lib/HTTPError");

exports.getComments = async function(req, res) {
  try {
    const org = await octokit.orgs.get({ org: req.params.org });

    return {
      org: org.data
    };
  } catch (err) {
    console.log(err.status);
    throw HTTPError("Organization not found.", 404);
  }
};
