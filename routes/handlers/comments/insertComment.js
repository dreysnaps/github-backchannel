const { get } = require("lodash");
const { HTTPException } = require("../../lib/HTTPException");
const { pool } = require("../../lib/postgres");

const debug = require("debug")("xendit:comment:insertComment");

/**
 * Inserts a new comment under the org, returns the row id for it.
 *
 * @param {*} orgName
 * @param {*} comment
 */
async function insertComment(orgName, comment) {
  const client = await pool.connect();
  const result = await client.query({
    text:
      "INSERT into comments (org_name, comment) VALUES($1, $2) RETURNING id",
    values: [orgName, comment]
  });

  client.release();

  return {
    id: result.rows[0].id,
    org_name: orgName,
    comment: comment
  };
}

exports.insertComment = async function(req) {
  try {
    const orgName = get(req, "params.org");
    const comment = get(req, "body.comment", "");
    const result = await insertComment(orgName, comment);

    return {
      message: `Successfully inserted comment to ${orgName}`,
      ...result
    };
  } catch (err) {
    debug(err);
    throw HTTPException();
  }
};
