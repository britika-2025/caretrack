const Staff = require('../models/Staff');

// Add a new staff member
exports.addStaff = async (req, res) => {
  const { name, email, password, role, contact } = req.body;
  try {
    const staff = new Staff({
      name,
      email,
      password,
      role,
      contact,
    });
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all staff members
exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};