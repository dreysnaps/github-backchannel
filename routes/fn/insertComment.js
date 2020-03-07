const lodash = require("lodash");

const { pool } = require("../lib/postgres");
const { HTTPError } = require("../lib/HTTPError");

exports.insertWord = async function insertWord(id, points = 0, word) {
  points = points + word.length;

  const client = await pool.connect();
  const result = await client.query(
    "select game_id from answers where game_id=$1 and answer=$2 limit 1",
    [id, word]
  );

  if (lodash.get(result, "rowCount", 0) > 0) {
    throw HTTPError("Answer is already given.");
  }

  await client.query("UPDATE games set points=$1 where id=$2", [points, id]);
  await client.query("INSERT into answers (game_id, answer) VALUES($1, $2) ", [
    id,
    word
  ]);

  client.release();

  return { points };
};
