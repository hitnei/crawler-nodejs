const mongoose = require("mongoose");
const connection =
  // "mongodb+srv://admin:admin@crawler.dzvzt.mongodb.net/Crawler?retryWrites=true&w=majority";
  "mongodb+srv://admin:admin@crawler.dzvzt.mongodb.net/book?retryWrites=true&w=1";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
