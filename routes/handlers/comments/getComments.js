const { HTTPError } = require("../../lib/HTTPError");
const { pool } = require("../../lib/postgres");
const debug = require("debug")("xendit:comments:getComments");

async function retrieveComments(orgName) {
  const client = await pool.connect();
  const query = await client.query({
    text:
      "SELECT comment, created_at from comments where org_name=$1 and deleted_at is null ORDER BY id DESC",
    values: [orgName]
  });
  const comments = query ? query.rows : [];
  client.release();

  return comments;
}

exports.getComments = async function(req) {
  try {
    return { comments: await retrieveComments(req.params.org) };
  } catch (err) {
    debug(err);
    throw HTTPError("Internal Server Error.", 500);
  }
};
