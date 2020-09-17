import * as express from 'express';

const app = express(),

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(_req, res) {
  res.render("index");
});

app.listen(8080, () => console.log('listening on port 8080'));
