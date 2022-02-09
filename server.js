const { app } = require("./index");
const { connectToDataBase } = require("./database-coinfiguration");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

(async () => {
  await connectToDataBase();
})();
