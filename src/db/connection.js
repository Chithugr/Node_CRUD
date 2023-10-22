const mongoose = require('mongoose');


async function connect(dbUrl) {
    console.log("DB URL is: " + dbUrl);
    mongoose.set("strictQuery", false);

    mongoose.connect(dbUrl,
        {
            // useNewUrlParser: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true
        }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Mongodb Connection Failed!!!"));
    db.once("open", function () {
        console.log("Mongodb Connected Successfully!!!");
    })
}

module.exports = connect;
