const User = require("../models/User");
const { generateToken } = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = new User({ username, email, password, role });

    await user.save();
    const userResponse = {
      name: user.username,
      email: user.email,
      role: user.role,
    };
    res.status(201).json({
      message: `${userResponse.name} you've been successfully registered`,
      data: userResponse,
      status: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [], status: false });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    const userResponse = {
      name: user.username,
      email: user.email,
      role: user.role,
    };
    res.json({
      message: `${userResponse.name} you've been successfully logged In`,
      data: userResponse,
      token: token,
      status: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [], status: false });
  }
};
