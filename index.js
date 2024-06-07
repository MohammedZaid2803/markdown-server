const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/convert', (req, res) => {
    //console.log(req.body.text);
  const markdownText = req.body.text;
  const html = marked.parse(markdownText);
  res.send({ html });
});

app.listen(port, () => {
  console.log(`Markdown server listening at http://localhost:${port}`);
});
