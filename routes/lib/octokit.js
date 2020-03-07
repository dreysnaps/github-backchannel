const { Octokit } = require("@octokit/rest");

exports.octokit = new Octokit({
  auth: "c68de710af27fd05b466bee3cab6a06edb6ec589",
  userAgent: "dreysnaps-test v0.1.0",
  baseUrl: "https://api.github.com"
});
