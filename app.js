const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'https://localhost:4000',
};

//middlewares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require('./routes/productRoutes.js');
const router2 = require('./routes/reviewRoutes.js');
app.use('/api/products', router);
app.use('/api/reviews', router2);

//tester
app.get('/', (req, res) => {
  res.send('hey');
});

const port = process.env.port || 4000;
app.listen(4000, () => {
  // server listen garna lai
  console.log(`Server has started at port ${port}`);
});
