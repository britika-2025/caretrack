const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff', 'nurse'], default: 'staff' },
  contact: { type: String, required: true },
  shifts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shift' }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  certifications: [{ name: String, expiryDate: Date }],
});

module.exports = mongoose.model('Staff', StaffSchema);