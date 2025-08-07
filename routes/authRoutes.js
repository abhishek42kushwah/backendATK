const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

// Public Routes
router.post('/signup', signup);
router.post('/login', login);

// Protected Route Example
router.get('/profile', protect, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
