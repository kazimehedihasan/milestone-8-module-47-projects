/* eslint-disable react/prop-types */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from '../Utility/Localstorage';

// eslint-disable-next-line no-unused-vars
const JobDetails = ({ c }) => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () =>{
   saveJobApplication(idInt)
    toast('you have applied successfully')
  }

  return (
    // const {job_description,job_responsibility,educational_requirements,experiences, contact_information,phone, email, address} =;

    <div>
      <div className="grid gsp-4 md:grid-cols-4">
        <div className="broder md:col-span-2">
          <h3>{job.job_title}</h3>
          <p>{job.company_name}</p>
          <p>{job.educational_requirements}</p>
          <p>{job.job_description}</p>
          <p>{job.educational_requirements}</p>
          <p>{job.experiences}</p>
        </div>
        <div className="broder">
          {/* <p>{job.contact_information}</p> */}
          <p>{job.contact_information.phone}</p>
          <p>{job.contact_information. address}</p>
          <p>{job.contact_information.email}</p>
        
        <button onClick={handleApplyJob} className="btn bg-primary">APPLY NOW</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
// 6 number video 12 mint dekha hoiche
