const User = require("../models/User");
const { generateToken } = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = new User({ username, email, password, role });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
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
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
