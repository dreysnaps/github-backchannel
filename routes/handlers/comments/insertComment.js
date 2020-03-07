const { get } = require("lodash");
const { HTTPError } = require("../../lib/HTTPError");
const { pool } = require("../../lib/postgres");

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
    console.log(err);
    throw HTTPError("Internal Server Error.", 500);
  }
};
