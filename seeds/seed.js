const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
    {
        username: "javimarashall",
        email: "javier@test.com",
        password: "Password12!"
    },
    {
        username: "jennarosebud",
        email: "jenna@test.com",
        password: "12password!"
    }
]

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });