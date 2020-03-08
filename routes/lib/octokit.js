const { Octokit } = require("@octokit/rest");
const config = require("../../config");

exports.octokit = new Octokit({
  auth: config.GITHUB_TOKEN,
  userAgent: config.USER_AGENT,
  baseUrl: "https://api.github.com"
});
