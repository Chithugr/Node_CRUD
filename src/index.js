const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('../router/posts');

const app = express();

app.use(bodyParser.json());

app.use('/api/posts', postRoutes);

// mongoose.connect('mongodb://localhost:27017/Chaithra', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
