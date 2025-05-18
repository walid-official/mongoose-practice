const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchUsers
} = require('../controllers/userController');

// Search route
router.route('/search')
  .get(searchUsers);

// Standard CRUD routes
router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
