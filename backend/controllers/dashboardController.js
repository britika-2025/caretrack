const Staff = require('../models/Staff');
const Resident = require('../models/Resident');


// Add a new resident
exports.getStats = async (req, res) => {
  try {
    const residentCount = await Resident.countDocuments({});
    const staffCount = await Staff.countDocuments({});
    const residents = await Resident.find({});

    res.status(201).json({
        staffCount,
        residentCount,
        residents
    });
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};