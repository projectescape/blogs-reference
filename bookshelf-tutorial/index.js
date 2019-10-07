var app = require("express")();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Maybe try to hide this info
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
  tableName: "user",
  posts() {
    return this.hasMany(Post, "email", "email");
  }
});
var Users = bookshelf.Collection.extend({
  model: User
});

// Fetch users
app.get("/users", async (req, res) => {
  var users = await new User().fetchAll();
  res.json(users);
  // var users = await Users.forge().fetch();
  // res.send(users.toJSON());
});

app.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  var user = await User.where("email", email).fetch();

  res.json(user);
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

app.put("/users/:email", async (req, res) => {
  console.log(req.body);
  var user = await User.where("email", req.params.email).save(
    { ...req.body },
    { patch: true }
  );
  // user = await user.save({ ...req.body });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

var Post = bookshelf.Model.extend({
  tableName: "post",
  user() {
    return this.belongsTo(User, "email", "email");
  }
});

var fetchPosts = async () => {
  // var posts = await new Post().fetch();
  // var posts = await new Post().fetchAll();
  // console.log(posts.toJSON());
  // var posts = await Post.where("id", 1).fetch({ withRelated: ["user"] });
  // console.log(posts.related("user").toJSON());
  var user = await User.where("email", "john@example.com").fetch({
    withRelated: ["posts"]
  });
  console.log(user.related("posts").toJSON());
  // var user = await User.where("email", "john@example.com").fetch({
  //   withRelated: ["posts"]
  // });
  // console.log(user.related("posts").toJSON());
  // var posts = user.related("posts");
  // console.log(posts);
  // User.where("email", "john@example.com")
  //   .fetch({ withRelated: ["posts"] })
  //   .then(function(user) {
  //     console.log(user.related("posts").toJSON());
  //   })
  //   .catch(function(err) {
  //     console.error(err);
  //   });
};

fetchPosts();

// Also has belongsTo and belongsToMany relations
