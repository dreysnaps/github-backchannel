const { HTTPException } = require("../../lib/HTTPException");
const { pool } = require("../../lib/postgres");

const debug = require("debug")("xendit:comments:deleteComments");

async function deleteComments(orgName) {
  const client = await pool.connect();
  await client.query({
    text:
      "UPDATE comments SET deleted_at=NOW() where org_name=$1 and deleted_at is null",
    values: [orgName]
  });
  client.release();
}

exports.deleteComments = async function(req) {
  try {
    const orgName = req.params.org;
    await deleteComments(orgName);

    return {
      message: `Successfully deleted comments for  ${orgName}.`
    };
  } catch (err) {
    debug(err);
    throw HTTPException();
  }
};
