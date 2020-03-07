const express = require("express");
const { getMembers } = require("handlers/members/getMembers");
const { getComments } = require("handlers/comments/getComments");
const { validateOrg } = require("middleware/validateOrg");
const router = express.Router();

const asyncMiddleware = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    console.log(err);
    res.status(err.http_code || 400).json({ message: err.message });
  }
};

router.use("/:org/", asyncMiddleware(validateOrg));

router.get(
  "/:org/comments",
  asyncMiddleware(async (req, res) => {
    res.status(201).json(await getComments(req, res));
  })
);

router.get(
  "/:org/members",
  asyncMiddleware(async (req, res) =>
    res.status(201).json(await getMembers(req, res))
  )
);

module.exports = router;
