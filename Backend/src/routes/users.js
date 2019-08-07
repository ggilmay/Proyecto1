const { Router } = require('express');
const router = Router();

const { getUsers, createUsers, deleteUsers, loginUsers, registerUsers } = require('../controllers/users.controller')

router.route('/login')
    .get(loginUsers)

router.route('/Register')
    .get(registerUsers)

router.route('/') 
    .get(getUsers)
    .post(createUsers);

router.route('/:id')
    .delete(deleteUsers);

module.exports = router;