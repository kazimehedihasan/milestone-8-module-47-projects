import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jods, setJods] = useState([]);
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
            jods.map(jod => <Job key={Job.id} job={jod}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
