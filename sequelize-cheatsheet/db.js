const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgresql://postgres:docker@localhost:5432/blog"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Foo = sequelize.define("foo", {
  name: {
    type: Sequelize.STRING,
    // primaryKey: true,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    // unique: true,
    primaryKey: true,
  },
});
const Bar = sequelize.define("bar", {
  name: {
    type: Sequelize.STRING,
    // primaryKey: true,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

Foo.belongsToMany(Bar, {
  // as: "Bar",
  through: "rel",
  foreignKey: "customNameForFoo", //
  sourceKey: "name",
});
Bar.belongsToMany(Foo, {
  // as: "Foo",
  through: "rel",
  foreignKey: "customNameForBar",
});

sequelize.sync({ force: true });
