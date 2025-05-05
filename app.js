const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');
const Listing = require('./models/listingModel');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', listingRoutes);

app.get('/', (req, res) => {
  res.send('HousingPanda backend is running.');
});

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });
});
