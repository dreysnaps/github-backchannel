const Promise = require("bluebird");
const { get } = require("lodash");

const { octokit } = require("../../lib/octokit");
const { HTTPException } = require("../../lib/HTTPException");
const debug = require("debug")("xendit:members:getMembers");

exports.getMembers = async function(req) {
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
        debug(err);
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
    debug(err);
    throw HTTPException();
  }
};
