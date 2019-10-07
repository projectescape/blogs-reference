var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var config = {
  client: "pg",
  connection: {
    host: "ec2-174-129-238-192.compute-1.amazonaws.com",
    user: "rzfkxzcqaslxhs",
    password:
      "f449c1bddfbb6c0847891b15a3fc97494b463d72293cb1e00499046b18db2004",
    database: "d1edg6gsqd7jdf",
    ssl: "true",
    charset: "utf8"
  }
};

var knex = require("knex")(config);
var bookshelf = require("bookshelf")(knex);

// Tablename minimum requirement, can add custom methods later
var User = bookshelf.Model.extend({
  tableName: "user"
});
var Users = bookshelf.Collection.extend({
  model: User
});

// Create new user
// User.forge({
//   name: "bob",
//   email: "bob@example.com"
// }).save();

// Fetch users
app.get("/users", async (req, res) => {
  // var users = await new User().fetchAll();
  var users = await Users.forge().fetch();
  res.json(users);
  // res.send(users.toJSON());
});

app.post("/users", async (req, res) => {
  console.log(req.query);
  var user = await User.forge({
    name: req.query.name,
    email: req.query.email
  }).save();
  res.json(user);
});

app.delete("/users/:email", async (req, res) => {
  var user = await User.where("email", req.params.email).destroy();
  res.json(user);
  // Following Doesnt work
  // var user = await User.forge({ email: req.params.email }).fetch();
  // await user.destroy();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
