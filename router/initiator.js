const express = require("express");
const path = require("path");

// specific route method

const initiatorRouter = express.Router();

initiatorRouter.get("/breach.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/intiator/breach.html")
  );
});

initiatorRouter.get("/gekko.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/intiator/gekko.hmtl")
  );
});

initiatorRouter.get("/kayo.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/intiator/kayo.html")
  );
  // response.sendFile(path.join(__dirname + "/public/team.html"));
});

initiatorRouter.get("/skye.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/intiator/skye.html")
  );
});

initiatorRouter.get("/sova.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/intiator/sova.html")
  );
});

module.exports = initiatorRouter;
// export default initiatorRouter
