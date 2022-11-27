const Express = require('express');

const app = new Express();

app.get('/', (req, res) => {
  res.send('Hello Express!')
});

app.listen(3000, () => {
  console.log('express server running at port 3000.');
});