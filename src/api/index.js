const express = require('express');
const hello = require('./hello');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Api Root Path 😈',
  });
});

router.use('/hello', hello);

module.exports = router;
