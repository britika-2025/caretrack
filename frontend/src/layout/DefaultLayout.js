import React from 'react'
import { Link } from 'react-router-dom'

const DefaultLayout = ({children}) => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/residents">
                    Residents
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Staff
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Medications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Care Plans
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Scheduling
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Billing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
  
          {children}
        </div>
      </div></>
  )
}

export default DefaultLayout