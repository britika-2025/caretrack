import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import axios from 'axios';

const Dashboard = () => {

  const [residentCount, setResidentCounts] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [residents, setResidents] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:5000/api/dashboard')
      .then(response => response.data)
      .then(data=>{
        setResidentCounts(data.residentCount);
        setStaffCount(data.staffCount);
        setResidents(data.residents);
      } )
      .catch(error => console.error(error));

    })

    return (
        <DefaultLayout>
<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard Overview</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button className="btn btn-sm btn-outline-secondary">Admin</button>
                <button className="btn btn-sm btn-outline-secondary">Help</button>
              </div>
            </div>
  
            <div className="row text-center mb-4">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5>Total Residents</h5>
                    <h2>{residentCount}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5>Staff Members</h5>
                    <h2>{staffCount}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5>Open Tasks</h5>
                    <h2>23</h2>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header">Resident Status</div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Room</th>
                          <th>Care Plan</th>
                          <th>Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                          <td>Mary Johnson</td>
                          <td>103A</td>
                          <td>High</td>
                          <td><span className="badge bg-success">Stable</span></td>
                        </tr> */}
                        {
                          residents.map(item=>{
                            return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.roomNumber}</td>
                                <td>{item.carePlan}</td>
                                <td>{item.age}</td>
                              </tr>
                            )
                          })
                        }
                        
{/*                         
                        <tr>
                          <td>Robert Smith</td>
                          <td>212B</td>
                          <td>Medium</td>
                          <td><span className="badge bg-warning">Check-up</span></td>
                        </tr>
                        <tr>
                          <td>Linda Davis</td>
                          <td>145C</td>
                          <td>Low</td>
                          <td><span className="badge bg-success">Stable</span></td>
                        </tr>
                        <tr>
                          <td>James Wilson</td>
                          <td>109A</td>
                          <td>High</td>
                          <td><span className="badge bg-danger">Attention</span></td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
  
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header">Upcoming Tasks</div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Medication - Room 103A <span className="badge bg-warning float-end">10:30 AM</span>
                      </li>
                      <li className="list-group-item">
                        Doctor Visit - Room 109A <span className="badge bg-danger float-end">1:15 PM</span>
                      </li>
                      <li className="list-group-item">
                        Physical Therapy - Room 203 <span className="badge bg-success float-end">11:00 AM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Calendar</div>
                  <div className="card-body text-center">
                    <p>Weekly Calendar Here</p>
                  </div>
                </div>
              </div>
  
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Recent Notifications</div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Medication adjustment for Mary Johnson (Room 103A)
                        <span className="text-muted float-end">15 min ago</span>
                      </li>
                      <li className="list-group-item">
                        James Wilson (Room 109A) requires immediate assistance
                        <span className="text-muted float-end">2 hours ago</span>
                      </li>
                      <li className="list-group-item">
                        Family visit scheduled for Linda Davis (Room 145C)
                        <span className="text-muted float-end">Yesterday</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </DefaultLayout>      
    )
}

export default Dashboard