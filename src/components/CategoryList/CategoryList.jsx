const CategoryList = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Jod Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <div>
          <img src="/public/assets/icons/calendar.png" alt="" />
          <h5>Account & Finance</h5>
          <p>300 Jobs Available</p>
        </div>
        <div>
          <img src="/public/assets/icons/creative.png" alt="" />
          <h5>Creative Design</h5>
          <p>100+ Jobs Available</p>
        </div>
        <div>
          <img src="/public/assets/icons/marketing.png" alt="" />
          <h5>Account & Finance</h5>
          <p>300 Jobs Available</p>
        </div>
        <div>
          <img src="/public/assets/icons/chip.png" alt="" />
          <h5>Account & Finance</h5>
          <p>300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
