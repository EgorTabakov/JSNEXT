const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));
app.use(express.static('public'));
app.use(express.static('src'));

app.get('/catalogData', (req, res) => {
  fs.readFile('catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('catalogData', (req, res) => {
  fs.readFile('catalogData/cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;
      
      cart.push(item);

      fs.writeFile('catalogData/cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
          
        }
      });
    }
  });
});


app.listen(3000, function () {
  console.log('server is running on port 3000!');
});