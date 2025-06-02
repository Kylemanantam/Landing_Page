const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// serve static files (HTML, CSS, JS) from Landing_Page/public
app.use(express.static(path.join(__dirname, 'Landing_Page/public')));

// serve images from Landing_Page/img at /img URL path
app.use('/img', express.static(path.join(__dirname, '/img')));

// serve index.html at root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
