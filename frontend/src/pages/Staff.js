import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/staff')
      .then(response => setStaff(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Staff</h1>
      <ul>
        {staff.map(staffMember => (
          <li key={staffMember._id}>
            {staffMember.name} - {staffMember.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;