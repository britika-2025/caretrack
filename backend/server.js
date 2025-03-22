const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const residentRoutes = require('./routes/residentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const billingRoutes = require('./routes/billingRoutes');
const aiRoutes = require('./routes/aiRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/residents', residentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CareTrack backend running on port ${PORT}`));