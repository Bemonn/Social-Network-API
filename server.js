const express = require('express');
const connectDB = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Call the function to connect to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
}).catch((error) => {
  console.error('Error connecting to the database: ', error.message);
});
