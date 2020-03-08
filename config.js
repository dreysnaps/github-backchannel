require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  USER_AGENT: process.env.USER_AGENT
};

module.exports = config;
