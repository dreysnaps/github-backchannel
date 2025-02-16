const express = require("express");
const { getMembers } = require("./handlers/members/getMembers");
const {
  getComments,
  deleteComments,
  insertComment
} = require("./handlers/comments/index.js");

const { validateOrg } = require("./middleware/validateOrg");
const router = express.Router();

const debug = require("debug")("xendit:*");

const asyncMiddleware = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.http_code || 500).json({ message: err.message });
  }
};

router.use("/:org/", asyncMiddleware(validateOrg));

router.get(
  "/:org/comments",
  asyncMiddleware(async (req, res) => {
    res.status(201).json(await getComments(req, res));
  })
);

router.delete(
  "/:org/comments",
  asyncMiddleware(async (req, res) => {
    res.status(201).json(await deleteComments(req, res));
  })
);
router.post(
  "/:org/comments",
  asyncMiddleware(async (req, res) => {
    res.status(201).json(await insertComment(req, res));
  })
);

router.get(
  "/:org/members",
  asyncMiddleware(async (req, res) => {
    debug("getComments");
    res.status(201).json(await getMembers(req, res));
  })
);

module.exports = router;
