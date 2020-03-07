const { get } = require("lodash");
const { octokit } = require("lib/octokit");
const { HTTPError } = require("lib/HTTPError");
const Promise = require("bluebird");

exports.getMembers = async function(req, res) {
  try {
    const listMembers = await octokit.orgs.listMembers({ org: req.params.org });

    const members = await Promise.map(listMembers.data, async member => {
      try {
        const user = get(
          await octokit.users.getByUsername({
            username: member.login
          }),
          "data",
          member
        );
        return {
          login: user.login,
          avatar_url: user.avatar_url,
          followers: user.followers,
          following: user.following
        };
      } catch (err) {
        console.log(err);
        return member;
      }
    });

    members.sort((a, b) => {
      return a.followers < b.followers ? 1 : -1;
    });

    return {
      members: members
    };
  } catch (err) {
    console.log(err);
    throw HTTPError("Internal Server Error");
  }
};
