const { Pool } = require("pg");

exports.pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://ueietjvvmgggkk:fb31effcc06d2cc77206392638dff292f9773a2255ac2c8b458010d609b3b6a5@ec2-184-72-236-57.compute-1.amazonaws.com:5432/d3deevhcbnonbs",
  ssl: true
});
