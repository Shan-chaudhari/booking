const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/service-selection.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'service-selection.html'));
});

app.get('/datetime-selection.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'datetime-selection.html'));
});

app.get('/booking-confirmation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking-confirmation.html'));
});

app.get('/bookings-list.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bookings-list.html'));
});

app.listen(port, () => {
  console.log(`Web server running at http://localhost:${port}`);
});
