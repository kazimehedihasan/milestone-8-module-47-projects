const Banner = () => {
  return (
    <div>
      <div className=" flex justify-between  my-7">
        <div className="gap-4">
          <h2 className="text-3xl">One Step Closer To Your Dream Job</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future.<br/> Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-slate-700">Started</button>
        </div>
        <div>
            <img className="w-80 h-96" src="/public/assets/images/user.1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
