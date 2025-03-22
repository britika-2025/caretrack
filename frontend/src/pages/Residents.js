import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

const Residents = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/residents')
      .then(response => setResidents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/residents/${id}`);
      setResidents(residents.filter(resident => resident._id !== id));
      alert('Resident deleted successfully!');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to delete resident.');
    }
  };

  return (
    <DefaultLayout>
<div className="residents-container">
      <h1>Residents</h1>
      <Link to="/add-resident" className="add-resident-link">Add New Resident</Link>
      <ul>
        {residents.map(resident => (
          <li key={resident._id}>
            <Link to={`/residents/${resident._id}`}>
              {resident.name} - Room {resident.roomNumber}
            </Link>
            <button onClick={() => handleDelete(resident._id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </DefaultLayout>
    
  );
};

export default Residents;