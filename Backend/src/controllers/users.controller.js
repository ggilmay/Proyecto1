const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.loginUsers = async (req, res) => {
    const {login} = res.send('Login');
    res.json(login)
}

userCtrl.registerUsers = async (req, res) => {
    const {register} = res.send('Register');
    res.json(register)
}

userCtrl.createUsers = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created')
}

userCtrl.deleteUsers = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id)
    res.json('User deleted')
}

module.exports = userCtrl;