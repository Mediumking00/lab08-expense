import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body" align=" center">
            <h5 className="card-title">Developer information</h5>
            <img src={process.env.PUBLIC_URL+'/Profile.jpg'} className='profile' alt="Profile" />
            <br/><br/>
            <p>Yotsaphon Liupolvanish (610610606)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Back</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
