var express = require("express");
var router = express.Router();
const {
  index,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} = require("./controller");

/* GET home page. */
router.get("/users", index);
router.get("/users/:id", getUserById);
router.post("/users", postUsers);
router.put("/users/:id", putUsers);
router.delete("/users/:id", deleteUsers);

module.exports = router;
