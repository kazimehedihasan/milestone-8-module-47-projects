/* eslint-disable react/prop-types */

import { MdLocationOn } from 'react-icons/md';

const Job = ({job}) => {
    const {logo,company_name ,job_title,remote_or_onsite,location, job_type , salary, job_description,job_responsibility,educational_requirements,experiences, contact_information,phone, email, address } = job;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {job_title}
    </h2>
    <h2 className="card-title">
    {company_name}
    </h2>  
    <div className="card-actions">
      <div className="badge badge-outline">{remote_or_onsite}</div> 
      <div className="badge badge-outline">{job_type}</div>
    </div>
    <div className="card-actions">
    <p><MdLocationOn></MdLocationOn> {location}</p>
    <p>{location}</p>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default Job;

// 5 number video 3 mint dekba hoiche