export default function JobCategories() {
  const JobCategoryItem = ({ item }) => {
    return (
      <div className="job-category-item">
        <div>icon</div>
        <div>Finance and Accounting</div>
        <div>101 job vacancies</div>
      </div>
    );
  };
  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        <span style={{ color: '#DB9476' }}>Job</span>{' '}
        <span style={{ color: '#EF3838' }}>Category</span>
      </h4>
      <div className="job-category-container">
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
        <JobCategoryItem />
      </div>
    </>
  );
}
