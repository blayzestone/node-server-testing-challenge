const express = require("express");
const db = require("../users/userModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

server.post("/", (req, res) => {
  const credentials = req.body;
  db.add(credentials)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = server;
