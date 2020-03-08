const { HTTPException } = require("../../lib/HTTPException");
const { pool } = require("../../lib/postgres");
const debug = require("debug")("xendit:comments:getComments");

/**
 * Using org name as the primary key, retrieves the related comments that haven't been deleted yet and orders it from newest to oldest.
 *
 * @param {*} orgName
 */
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
    throw HTTPException();
  }
};
