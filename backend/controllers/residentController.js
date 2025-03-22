const Resident = require('../models/Resident');

// Add a new resident
exports.addResident = async (req, res) => {
  try {
    const resident = new Resident(req.body);
    await resident.save();
    res.status(201).json(resident);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all residents
exports.getResidents = async (req, res) => {
  try {
    const residents = await Resident.find();
    res.json(residents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single resident by ID
exports.getResidentById = async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id);
    if (!resident) {
      return res.status(404).json({ message: 'Resident not found' });
    }
    res.json(resident);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a resident by ID
exports.deleteResident = async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id);
    if (!resident) {
      return res.status(404).json({ message: 'Resident not found' });
    }
    res.json({ message: 'Resident deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};