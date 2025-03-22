import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

const ResidentDetails = () => {
  const { id } = useParams();
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/residents/${id}`)
      .then(response => setResident(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!resident) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <div>
        <h1>{resident.name}</h1>
        <p>Age: {resident.age}</p>
        <p>Gender: {resident.gender}</p>
        <p>Room Number: {resident.roomNumber}</p>
        <p>Medical History: {resident.medicalHistory}</p>
        <p>Allergies: {resident.allergies.join(', ')}</p>
        <p>Dietary Restrictions: {resident.dietaryRestrictions.join(', ')}</p>
        <h2>Emergency Contacts:</h2>
        <ul>
          {resident.emergencyContacts.map((contact, index) => (
            <li key={index}>
              {contact.name} - {contact.phone} ({contact.relationship})
            </li>
          ))}
        </ul>
        <p>Care Plan: {resident.carePlan}</p>
        <img src={resident.photo} alt={resident.name} style={{ width: '200px' }} />
      </div>
    </DefaultLayout>

  );
};

export default ResidentDetails;