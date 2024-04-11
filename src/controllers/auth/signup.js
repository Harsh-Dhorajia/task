const bcrypt = require('bcryptjs');
const UserModel = require('../../models/User.model');
const generate = require('../../utils/generateToken');

const signup = async (req, res) => {
  try {
    const { username, role, email } = req.body;
    let { password } = req.body;

    // check if user already exists
    const isUserAlreadyRegistered = await UserModel.find({
      email,
    });
    if (isUserAlreadyRegistered.length) {
      return res.status(403).send({
        message: 'username already exists',
      });
    }

    // encrypt given password
    password = await bcrypt.hash(password, 12);

    // create user with username, password and role
    const user = await UserModel.create({
      username,
      password,
      role,
      email
    });

    return res.status(201).send({
      message: 'User is registered successfully',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};

module.exports = signup;
