const route = require("express").Router();
const { getdata, postdata, putdata, deletdata } = require("../Controller/EmployeeCon");

route.get("/", getdata);
route.post("/", postdata);
route.put("/:id", putdata);
route.delete("/:id", deletdata);

module.exports = route;
