import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jods, setJods] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJods(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
            jods.slice(0, dataLength).map(jod => <Job key={Job.id} job={jod}></Job>)
        }
      </div>
      <div className= {dataLength === jods.length && 'hidden'}>
      <button onClick={() => setDataLength(jods.length)} className=" btn bg-orange-200">Show All Jobs</button>
      </div>
    </div>
    
  );
};

export default FeaturedJobs;
