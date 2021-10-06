const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/', userController.getUsers);
router.get('/:user_id', userController.getUserById);
router.post('/', userController.createUser );
router.delete('/:user_id', userController.deleteUserById);

module.exports = router;