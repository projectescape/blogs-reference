var app = require("express")();
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
// var Users = Bookshelf.Collection.extend({
//   model: User
// });

// Create new user
// User.forge({
//   name: "bob",
//   email: "bob@example.com"
// }).save();

// Fetch users
app.get("/users", async (req, res) => {
  var users = await new User().fetchAll();
  // console.log(users);
  res.send(users.toJSON());
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
